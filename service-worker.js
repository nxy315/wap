"use strict";var precacheConfig=[["/index.html","0f898d270c68e7efc3fd7030fd32dca2"],["/static/css/main.1b1999ec.css","b968c1083eb832c681ee4f2492f229b8"],["/static/js/main.d2f64352.js","1b9d0301fb6e043d5a85f1f9435e9bcc"],["/static/media/activity_bg.176a5d28.png","176a5d2880ad63a29979aa10644ab63e"],["/static/media/back.0a693e0c.png","0a693e0cddf071db4e1e55f8aa5ccb14"],["/static/media/back.b550669c.png","b550669c370fbc796663c1ff14d8f02f"],["/static/media/begin_bg.ef0945d7.png","ef0945d78311c98085273a0ca01d3d86"],["/static/media/bg.93e4084d.png","93e4084d02fc879189d07dddb84cc6e1"],["/static/media/border.afbc26b2.png","afbc26b23632327fc78feb8a621ff992"],["/static/media/close.4dc19c68.png","4dc19c684ae705f11dac15353e4ed86e"],["/static/media/devloping.12896a82.png","12896a82ca003fd9a8d83030f570d520"],["/static/media/edit.0c1debed.png","0c1debed26967852935362500276edd6"],["/static/media/go.775b0e18.png","775b0e1809da400428d04f9877baf0dc"],["/static/media/home.52022362.png","520223624da6460aa7d4baa1367329bb"],["/static/media/home_active.e1da1527.png","e1da1527f8de58ce564a378ed084873c"],["/static/media/invitation.67874767.png","67874767ecc6e77fa8c9c38a0296f23d"],["/static/media/invitation_active.791b5869.png","791b58699f8c09813b8843c49a16f7a0"],["/static/media/islogin.d78baca0.png","d78baca09ea1d6ee9c7c0433d913a26c"],["/static/media/loading.84a15aa0.svg","84a15aa010f310acb5f4bc99ce8f7ed1"],["/static/media/logo.6dc885d4.png","6dc885d4d9cdc7a3ece9ad38f65cd184"],["/static/media/logo.e705adfe.png","e705adfe757263210a89145fea19d4c2"],["/static/media/logo_text.ddb44a0a.png","ddb44a0acd4b0d477c050d0cdcd0b41e"],["/static/media/mine.6d07b819.png","6d07b81931b072a3ba16c598d5355215"],["/static/media/mine_active.44214c12.png","44214c12223649ba3d2f2a3de2480061"],["/static/media/music_close.94573fef.png","94573fef7b9627733f606625ca8e8e5e"],["/static/media/music_play.00d8b59f.png","00d8b59f7bd754330ba2f961d973dc8d"],["/static/media/noresult.79eade9b.png","79eade9bcb5dc52ba2eb24664180096a"],["/static/media/open.5357047b.png","5357047b0e98c7e59e8eba66c7bc5c4d"],["/static/media/part_bg1.c621d36b.png","c621d36bb32a2d97349bdec760162ebb"],["/static/media/qrcode.220e7818.png","220e7818ec1cda1cbd99ec9301ec1086"],["/static/media/redpack.19678bf9.png","19678bf942d5955f14d576e596fa2354"],["/static/media/unopen.692da310.png","692da3108717f613213a3820f21946f6"],["/static/media/user_cover.b164a6c1.png","b164a6c15a14402d4b2bf17d5702b411"],["/static/media/xi.cef17905.png","cef179055ad30bb5b10871fd273222d6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});