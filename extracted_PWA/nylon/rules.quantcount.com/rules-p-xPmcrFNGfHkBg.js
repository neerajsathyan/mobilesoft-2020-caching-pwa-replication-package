/*
 Quantcast measurement tag
 Copyright (c) 2008-2019, Quantcast Corp.
*/
(function(a,m,l){var p=function(f){var k=l.createElement("a");k.href=f;return k},q=function(f){return f.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g,"")},r=function(f){return{}.toString.call(f).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},t=function(f,k){if(!k)return k;var a,d;a=-1!==f.toLowerCase().indexOf("tag")||-1!==f.toLowerCase().indexOf("keyword")||0===f.toLowerCase().indexOf("qc:");d=-1===f.toLowerCase().indexOf("tag")&&-1===f.toLowerCase().indexOf("keyword")&&0===f.toLowerCase().indexOf("qc:")?
!1:!0;d&&(k=k.replace(/\.+/g," "));if(a){d=k.split(",");for(a=0;a<d.length;a++)d[a]=q(d[a]);return d}return q(k.replace(/,+/g," "))},s=function(f,a,b){return f?"nc"===f?!a||!b||0>a.indexOf(b):"eq"===f?a===b:"sw"===f?0===a.indexOf(b):"ew"===f?(f=a.length-b.length,a=a.lastIndexOf(b,f),-1!==a&&a===f):"c"===f?0<=a.indexOf(b):!1:!1},h=function(a,b,c){var d;d=m.top===m.self?l.location.host:p(l.referrer).hostname;s(b,d,c)?a(d):a(!1)},b=function(a,b,c){var d;d=m.top===m.self?l.location.href:p(l.referrer).href;
s(b,d,c)?a(d):a(!1)},c=function(a,b,c){b=document.getElementsByTagName("meta");for(var d,e,g=[],h=0;h<b.length;h++)d=b[h],e=d.getAttribute("name")||d.getAttribute("property"),e==c&&(g=g.concat(t(c,d.getAttribute("content"))));0<g.length?a(g):a(!1)},n=function(a){return{labels:a}},g=function(a){return"array"===r(a)?n(a.join(",")):n(""+a)},e=function(a,b){var c=[],d;if("array"===r(b)){for(d=0;d<b.length;d++)c.push(a+"."+b[d]);return n(c.join(","))}return n(a+"."+b)},h=["rules",[a,null,[[g,"Culture and Innovation Group"]],
[[b,"c","mic.com"]]],[a,null,[[g,"Culture and Innovation Group"]],[[b,"c","theoutline.com"]]],[a,null,[[g,"Culture and Innovation Group"]],[[b,"c","inverse.com"]]],[a,null,[[g,"Women's Lifestyle Group"]],[[b,"c","bustle.com"]]],[a,null,[[g,"Women's Lifestyle Group"]],[[b,"c","romper.com"]]],[a,null,[[g,"Women's Lifestyle Group"]],[[b,"c","elitedaily.com"]]],[a,null,[[g,"Women's Lifestyle Group"]],[[b,"c","thezoereport.com"]]],[a,null,[[g,"Women's Lifestyle Group"]],[[b,"c","nylon.com"]]],[a,null,
[[e,"Category.INVERSE"]],[[c,"exactmatch","article:category"],[b,"c","inverse.com"]]],[a,null,[[e,"Mic.Title"]],[[c,"exactmatch","og:title"],[b,"c","mic.com"]]],[a,null,[[e,"Flavorwire.Author"]],[[c,"exactmatch","author"],[h,"c","https://www.flavorwire.com"]]],[a,null,[[e,"Flavorwire.Title"]],[[c,"exactmatch","og:title"],[b,"c","https://www.flavorwire.com"]]],[a,null,[[e,"Tags.INVERSE"]],[[c,"exactmatch","article:tag"],[b,"c","inverse.com"]]],[a,null,[[e,"Inverse.Author"]],[[c,"exactmatch","author"],
[b,"c","inverse.com"]]],[a,null,[[e,"Inverse.Title"]],[[c,"exactmatch","og:title"],[b,"c","inverse.com"]]],[a,null,[[e,"Nylon.Title"]],[[c,"exactmatch","og:title"],[b,"c","nylon.com"]]],[a,null,[[e,"Tags.NYLON"]],[[c,"exactmatch","keywords"],[b,"c","nylon.com"]]],[a,null,[[e,"Category.NYLON"]],[[c,"exactmatch","article:section"],[b,"c","nylon.com"]]],[a,null,[[g,"_campaign.branded.Branded Campaigns.Vital Farms.6 Ways To Cut Through the BS Of Online Dating"]],[[b,"c","bustle.com/p/6-ways-to-cut-through-the-bs-of-online-dating-12156164"]]],
[a,null,[[g,"_campaign.branded.Branded Campaigns.Gymboree.You Need This New Kids Collection Handpicked By Rachel Zoe"]],[[b,"c","romper.com/p/you-need-this-new-kids-collection-handpicked-by-rachel-zoe-12381125"]]],[a,null,[[g,"_campaign.branded.Branded Campaigns.Otterbox.These Are Hands-Down The Most Stylish Cases For Your New Phone"]],[[b,"c","bustle.com/p/these-are-hands-down-the-most-stylish-cases-for-your-new-phone-12051988"]]],[a,null,[[g,"_campaign.branded.Branded Campaigns.Pacific Foods.How To Make All Your Fall Faves in a Slow Cooker Because Adulting Doesnt Have To Be Hard"]],
[[b,"c","bustle.com/p/how-to-make-all-your-fall-faves-in-a-slow-cooker-because-adulting-doesnt-have-to-be-hard-11831344"]]],[a,null,[[g,"_campaign.branded.Branded Campaigns.BCBG.Falls Biggest Trends Fashion Editors Cant Wait to Get Their Hands On"]],[[b,"c","thezoereport.com/falls-biggest-trends-fashion-editors-cant-wait-to-get-their-hands-on"]]],[a,null,[[g,"_campaign.branded.Branded Campaigns.Abercrombie \x26 Fitch.Fall 2018.How 5 Bustle Editors Are Wearing Falls Varsity Trend"]],[[b,"c","bustle.com/p/how-5-bustle-editors-are-wearing-falls-varsity-trend-10055277"]]],
[a,null,[[e,"Zoe Report.Author"]],[[c,"exactmatch","author"],[h,"c","thezoereport.com"]]],[a,null,[[e,"Zoe Report.Title"]],[[c,"exactmatch","og:title"],[b,"c","thezoereport.com"]]],[a,null,[[e,"Elite Daily.Author"]],[[c,"exactmatch","author"],[h,"c","elitedaily.com"]]],[a,null,[[e,"Romper.Author"]],[[c,"exactmatch","author"],[h,"c","romper.com"]]],[a,null,[[e,"Bustle.Author"]],[[c,"exactmatch","author"],[h,"c","bustle.com"]]],[a,null,[[e,"Elite Daily.Title"]],[[c,"exactmatch","og:title"],[h,"c","elitedaily.com"]]],
[a,null,[[e,"Bustle.Title"]],[[c,"exactmatch","og:title"],[h,"c","www.bustle.com"]]],[a,null,[[e,"Romper.Title"]],[[c,"exactmatch","og:title"],[h,"c","www.romper.com"]]]];__qc.apply(null,h);(function(b){var c=function(){return m.top===m.self?l.location.href:p(l.referrer).href},e=c();setInterval(function(){var d=c();d!==e&&(e=d,__qc.apply(null,b),__qc("push",{qacct:a,event:"load"},!0))},2E3)})(h)})("p-xPmcrFNGfHkBg",window,document);