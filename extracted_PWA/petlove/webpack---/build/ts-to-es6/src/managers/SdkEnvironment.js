import { BuildEnvironmentKind } from '../models/BuildEnvironmentKind';
import { TestEnvironmentKind } from '../models/TestEnvironmentKind';
import { WindowEnvironmentKind } from '../models/WindowEnvironmentKind';
import { InvalidArgumentError, InvalidArgumentReason } from '../errors/InvalidArgumentError';
import { IntegrationKind } from "../models/IntegrationKind";
import ServiceWorkerHelper from "../helpers/ServiceWorkerHelper";
import Environment from "../Environment";
import OneSignalUtils from "../utils/OneSignalUtils";
export default class SdkEnvironment {
    /**
     * Returns development, staging, or production.
     *
     * The magic constants used to detect the environment is set or unset when
     * building the SDK.
     */
    static getBuildEnv() {
        if (typeof __DEV__ !== "undefined" && __DEV__) {
            return BuildEnvironmentKind.Development;
        }
        else if (typeof __STAGING__ !== "undefined" && __STAGING__) {
            return BuildEnvironmentKind.Staging;
        }
        else {
            return BuildEnvironmentKind.Production;
        }
    }
    /**
     * Determines whether the current frame context executing this function is part of a:
     *
     *  a) HTTP site using a proxy subscription origin
     *
     *  b) or, HTTPS site using a proxy subscription origin
     *
     *  c) or, HTTPS site using its own origin for subscribing
     *
     * The determination affects permissions and subscription:
     *
     *  a) Because the parent (top frame) of the proxy origin frame is HTTP, the entire context is
     *  insecure. In the proxy origin frame, notification permissions are always "denied", access to
     *  the service worker's registration throws a security error, and no service worker controls the
     *  proxy origin frame.
     *
     *  b) The context is secure. In the proxy origin frame, notification permissions are "granted" if
     *  actually granted otherwise "denied" if either unprompted or blocked. The service worker
     *  controls the proxy origin frame and access to the service worker's registration is allowed.
     *  Requesting permissions from child frames is not allowed. Subscribing from child frames wasn't
     *  allowed but is now allowed.
     *
     *  c) All features are allowed.
     *
     * @param usingProxyOrigin Using a subdomain of os.tc or onesignal.com for subscribing to push.
     */
    static async getIntegration(usingProxyOrigin) {
        if (Environment.isSafari()) {
            /* HTTP doesn't apply to Safari sites */
            return IntegrationKind.Secure;
        }
        const isTopFrame = (window === window.top);
        const isHttpsProtocol = window.location.protocol === "https:";
        // For convenience, try to look up usingProxyOrigin instead of requiring it to be passed in
        if (usingProxyOrigin === undefined) {
            if (typeof OneSignal !== "undefined" && OneSignal.context && OneSignal.context.appConfig) {
                usingProxyOrigin = !!OneSignal.context.appConfig.subdomain;
            }
            else {
                throw new InvalidArgumentError("usingProxyOrigin", InvalidArgumentReason.Empty);
            }
        }
        /*
          Executing from the top frame, we can easily determine whether we're HTTPS or HTTP.
    
          Executing from a child frame of any depth, we can check the current frame's protocol. If it's
          HTTP it's definitely insecure. If it's HTTPS, we attempt to call
          ServiceWorkerContainer.getRegistration and see if the call throws an error or succeeds. If the
          call throws an error, we can assume some parent frame in the chain above us is insecure.
         */
        if (isTopFrame) {
            if (isHttpsProtocol) {
                return usingProxyOrigin ?
                    IntegrationKind.SecureProxy :
                    IntegrationKind.Secure;
            }
            else {
                // If localhost and allowLocalhostAsSecureOrigin, it's still considered secure
                if (OneSignalUtils.isLocalhostAllowedAsSecureOrigin() &&
                    (location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
                    return IntegrationKind.Secure;
                }
                /* The case of HTTP and not using a proxy origin isn't possible, because the SDK will throw
                an initialization error stating a proxy origin is required for HTTP sites. */
                return IntegrationKind.InsecureProxy;
            }
        }
        else {
            if (isHttpsProtocol) {
                /* Check whether any parent frames are insecure */
                const isFrameContextInsecure = await SdkEnvironment.isFrameContextInsecure();
                if (isFrameContextInsecure) {
                    return IntegrationKind.InsecureProxy;
                }
                else {
                    return usingProxyOrigin ?
                        IntegrationKind.SecureProxy :
                        IntegrationKind.Secure;
                }
            }
            else {
                /*
                Because this frame is insecure, the entire chain is insecure.
        
                The case of HTTP and not using a proxy origin isn't possible, because the SDK will throw an
                initialization error stating a proxy origin is required for HTTP sites. */
                return IntegrationKind.InsecureProxy;
            }
        }
    }
    /**
     * From a child frame, returns true if the current frame context is insecure.
     *
     * This is used to check if isPushNotificationsEnabled() should grab the service worker
     * registration. In an HTTPS iframe of an HTTP page, getting the service worker registration would
     * throw an error.
     *
     * This method can trigger console warnings due to using ServiceWorkerContainer.getRegistration in
     * an insecure frame.
     */
    static async isFrameContextInsecure() {
        // If we are the top frame, or service workers aren't available, don't run this check
        if (window === window.top ||
            !('serviceWorker' in navigator) ||
            typeof navigator.serviceWorker.getRegistration === 'undefined') {
            return false;
        }
        // Will be null if there was an issue retrieving a status
        const registrationResult = await ServiceWorkerHelper.getRegistration();
        return !registrationResult;
    }
    static isInsecureOrigin() {
        return window.location.protocol === "http:";
    }
    /**
     * Describes the current frame context.
     */
    static getWindowEnv() {
        if (typeof window === "undefined") {
            if (typeof self !== "undefined" && typeof self.registration !== "undefined") {
                return WindowEnvironmentKind.ServiceWorker;
            }
            else {
                return WindowEnvironmentKind.Unknown;
            }
        }
        else {
            // If the window is the root top-most level
            if (window === window.top) {
                if (location.href.indexOf("initOneSignal") !== -1 ||
                    (location.pathname === '/subscribe' &&
                        location.search === '') &&
                        (location.hostname.endsWith('.onesignal.com') ||
                            location.hostname.endsWith('.os.tc') ||
                            (location.hostname.indexOf('.localhost') !== -1 &&
                                SdkEnvironment.getBuildEnv() === BuildEnvironmentKind.Development))) {
                    return WindowEnvironmentKind.OneSignalSubscriptionPopup;
                }
                else {
                    return WindowEnvironmentKind.Host;
                }
            }
            else if (location.pathname === '/webPushIframe') {
                return WindowEnvironmentKind.OneSignalProxyFrame;
            }
            else if (location.pathname === '/webPushModal') {
                return WindowEnvironmentKind.OneSignalSubscriptionModal;
            }
            else {
                return WindowEnvironmentKind.CustomIframe;
            }
        }
    }
    /**
     * Describes whether the SDK is built in tests mode or not.
     *
     * This method is overriden when tests are run.
     */
    static getTestEnv() {
        return typeof __TEST__ === "undefined" ?
            TestEnvironmentKind.UnitTesting :
            TestEnvironmentKind.None;
    }
    /**
     * Returns build-specific prefixes used for operations like registering the
     * service worker.
     *
     * For example, in staging the registered service worker filename is
     * Staging-OneSignalSDKWorker.js.
     */
    static getBuildEnvPrefix(buildEnv = SdkEnvironment.getBuildEnv()) {
        switch (buildEnv) {
            case BuildEnvironmentKind.Development:
                return 'Dev-';
            case BuildEnvironmentKind.Staging:
                return 'Staging-';
            case BuildEnvironmentKind.Production:
                return '';
            default:
                throw new InvalidArgumentError('buildEnv', InvalidArgumentReason.EnumOutOfRange);
        }
    }
    /**
     * Returns the URL object representing the components of OneSignal's API
     * endpoint.
     */
    static getOneSignalApiUrl(buildEnv = SdkEnvironment.getBuildEnv()) {
        switch (buildEnv) {
            case BuildEnvironmentKind.Development:
                return new URL('https://localhost:3001/api/v1');
            case BuildEnvironmentKind.Staging:
                return new URL(`https://${window.location.host}/api/v1`);
            case BuildEnvironmentKind.Production:
                return new URL('https://onesignal.com/api/v1');
            default:
                throw new InvalidArgumentError('buildEnv', InvalidArgumentReason.EnumOutOfRange);
        }
    }
    static getOneSignalResourceUrlPath(buildEnv = SdkEnvironment.getBuildEnv()) {
        const origin = SdkEnvironment.getOneSignalApiUrl(buildEnv).origin;
        let path;
        switch (buildEnv) {
            case BuildEnvironmentKind.Development:
            case BuildEnvironmentKind.Staging:
            case BuildEnvironmentKind.Production:
                path = '/sdks';
                break;
            default:
                throw new InvalidArgumentError('buildEnv', InvalidArgumentReason.EnumOutOfRange);
        }
        return new URL(origin + path);
    }
    static getOneSignalCssFileName(buildEnv = SdkEnvironment.getBuildEnv()) {
        const baseFileName = "OneSignalSDKStyles.css";
        switch (buildEnv) {
            case BuildEnvironmentKind.Development:
                return `Dev-${baseFileName}`;
            case BuildEnvironmentKind.Staging:
                return `Staging-${baseFileName}`;
            case BuildEnvironmentKind.Production:
                return baseFileName;
            default:
                throw new InvalidArgumentError('buildEnv', InvalidArgumentReason.EnumOutOfRange);
        }
    }
}
//# sourceMappingURL=SdkEnvironment.js.map