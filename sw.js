/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2-encuentro-ciclo-Explorar-HD-CITEP-UBA/index.html","fff7238056918fa4cf43e7b53bab2abe"],["/404.html","24cfa8cf1d7f3fbe1c3a3fbb95020347"],["/assets/Diego-micrositio.jpg","e88ae5c771b2e33eaf05d1b3895a0ed8"],["/assets/Gabriel-micrositio.jpg","e221bac223ba113ca072e4b2894170eb"],["/assets/Gimena-micrositio.jpg","5461da40d245070182af0c5e55b670a7"],["/assets/Nidia-micrositio.jpg","560e368b2a64000f5813d385a46a5c18"],["/assets/Romina-micrositio.jpg","7667797c36fc473610203fff49c0c4f4"],["/assets/css/main.css","ece10e1ac7d9e87242a8df741a3016dd"],["/assets/hdcaicytlab-logo.png","e9cb1408823088276b4b8d06d1a3cd72"],["/assets/img/favicon.jpg","f6d993b2943101a263c8204cc0673702"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","f625044491b20a5df78571ba266cbcf6"],["/assets/img/icons/favicon-32x32.png","67502381e45848a4ab76123364675ffe"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/posts/ADHO2018-Mexico.jpg","fe54e28bebf305a4c6f9910822572ca2"],["/assets/img/posts/ADHO2018-Mexico_lg.jpg","b5912b8c1982e098e7b0f6c440cf48bd"],["/assets/img/posts/ADHO2018-Mexico_md.jpg","5b6c90db4366ff4290da9ff060272dda"],["/assets/img/posts/ADHO2018-Mexico_placehold.jpg","a15ff6dd23b86c667b49132f845ec056"],["/assets/img/posts/ADHO2018-Mexico_sm.jpg","cb0e3b19ab72ad24d620c4ca8e6fea33"],["/assets/img/posts/ADHO2018-Mexico_thumb.jpg","891364c49a231cfd19557ad717cd65fc"],["/assets/img/posts/ADHO2018-Mexico_thumb@2x.jpg","2b8301f536f744264d09b4c2a08e96b9"],["/assets/img/posts/ADHO2018-Mexico_xs.jpg","f5ca53f8afb30edaf444f79b83bf12c5"],["/assets/img/posts/ADHO2018-Puentes.jpg","ff947c3b6c501f97f9f0b89204938389"],["/assets/img/posts/ADHO2018-Puentes_lg.jpg","ff947c3b6c501f97f9f0b89204938389"],["/assets/img/posts/ADHO2018-Puentes_md.jpg","5d2ee61950fbd4035dc06a803162cce8"],["/assets/img/posts/ADHO2018-Puentes_placehold.jpg","1d6548914b84326517ab5afaea4594f8"],["/assets/img/posts/ADHO2018-Puentes_sm.jpg","4efe10c29937978b4c75883b02bee31b"],["/assets/img/posts/ADHO2018-Puentes_thumb.jpg","c11358cd86d437e3d85531fbd523202b"],["/assets/img/posts/ADHO2018-Puentes_thumb@2x.jpg","f3aaf81cbf2787cccb3bf2f6e0898dc7"],["/assets/img/posts/ADHO2018-Puentes_xs.jpg","be531eef9fd7d1f449ea1ca56022fb5a"],["/assets/img/posts/HDCAICYTLAB.jpg","f2251897b4408faa693052361544ef97"],["/assets/img/posts/HDCAICYTLAB_lg.jpg","b06af3615112ab87a6f30174fca6bdb1"],["/assets/img/posts/HDCAICYTLAB_md.jpg","2ac1d04eea957e0454794b0fd8efaf6f"],["/assets/img/posts/HDCAICYTLAB_placehold.jpg","944cc5682b775b163196bbfba74edd86"],["/assets/img/posts/HDCAICYTLAB_sm.jpg","ff9f1d26dc1c66c6778acfdbaf20a3fb"],["/assets/img/posts/HDCAICYTLAB_thumb.jpg","3089f211b55c3d933da27a252ad8e99b"],["/assets/img/posts/HDCAICYTLAB_thumb@2x.jpg","e4544669f3194968f0c3309589d9f525"],["/assets/img/posts/HDCAICYTLAB_xs.jpg","4933a735ab9c2d9df0f8a35ba1a41e42"],["/assets/img/posts/Incipit.jpg","34cb25a311d8a8d56d04f1f0dacb5825"],["/assets/img/posts/Incipit_lg.jpg","34cb25a311d8a8d56d04f1f0dacb5825"],["/assets/img/posts/Incipit_md.jpg","34cb25a311d8a8d56d04f1f0dacb5825"],["/assets/img/posts/Incipit_placehold.jpg","1390d39baeb96c6e49869c215523da7a"],["/assets/img/posts/Incipit_sm.jpg","34cb25a311d8a8d56d04f1f0dacb5825"],["/assets/img/posts/Incipit_thumb.jpg","590fde78c687afd891cbebfa7edf8efb"],["/assets/img/posts/Incipit_thumb@2x.jpg","34cb25a311d8a8d56d04f1f0dacb5825"],["/assets/img/posts/Incipit_xs.jpg","5ea2628a509de5a65a3137e92b27d5a2"],["/assets/img/posts/Ravignani-membrete-UE.jpg","44dd7f2c304fb6dfd3ba8413df21dbe0"],["/assets/img/posts/Ravignani-membrete-UE_lg.jpg","44dd7f2c304fb6dfd3ba8413df21dbe0"],["/assets/img/posts/Ravignani-membrete-UE_md.jpg","44dd7f2c304fb6dfd3ba8413df21dbe0"],["/assets/img/posts/Ravignani-membrete-UE_placehold.jpg","5ac039c139ddfcf128a5587ba73a4cfc"],["/assets/img/posts/Ravignani-membrete-UE_sm.jpg","44dd7f2c304fb6dfd3ba8413df21dbe0"],["/assets/img/posts/Ravignani-membrete-UE_thumb.jpg","44dd7f2c304fb6dfd3ba8413df21dbe0"],["/assets/img/posts/Ravignani-membrete-UE_thumb@2x.jpg","44dd7f2c304fb6dfd3ba8413df21dbe0"],["/assets/img/posts/Ravignani-membrete-UE_xs.jpg","44dd7f2c304fb6dfd3ba8413df21dbe0"],["/assets/img/posts/Tapa-Incipit.jpg","891a1fef1539d0fb9bfffcacc073ff36"],["/assets/img/posts/Tapa-Incipit_lg.jpg","891a1fef1539d0fb9bfffcacc073ff36"],["/assets/img/posts/Tapa-Incipit_md.jpg","891a1fef1539d0fb9bfffcacc073ff36"],["/assets/img/posts/Tapa-Incipit_placehold.jpg","ee3ebf0b9bae50a3a76f6916994610a4"],["/assets/img/posts/Tapa-Incipit_sm.jpg","891a1fef1539d0fb9bfffcacc073ff36"],["/assets/img/posts/Tapa-Incipit_thumb.jpg","a6fb8ed0b718cf55accdb314a66ab2f5"],["/assets/img/posts/Tapa-Incipit_thumb@2x.jpg","891a1fef1539d0fb9bfffcacc073ff36"],["/assets/img/posts/Tapa-Incipit_xs.jpg","e8b1c5c24236ed80d7a022fbb986f982"],["/assets/img/posts/adventure-ancient-antique-697662.jpg","ca4ed555b6a09ade9b177346b8e2377d"],["/assets/img/posts/adventure-ancient-antique-697662_lg.jpg","7e457a99b4c7005e22281d21b7480f07"],["/assets/img/posts/adventure-ancient-antique-697662_md.jpg","0e43bf45fa560b8a9e955d51527addb5"],["/assets/img/posts/adventure-ancient-antique-697662_placehold.jpg","e3f44138ce66b2a56ebdf987dd2aeda0"],["/assets/img/posts/adventure-ancient-antique-697662_sm.jpg","e96af65edda164ae58854eb995709d5f"],["/assets/img/posts/adventure-ancient-antique-697662_thumb.jpg","30eb2b43008895c79dcc3f69c6998fe7"],["/assets/img/posts/adventure-ancient-antique-697662_thumb@2x.jpg","ebd59127e5c375b8e7ce1eb250d07722"],["/assets/img/posts/adventure-ancient-antique-697662_xs.jpg","054c10263d4e97e18743316ad88681a4"],["/assets/img/posts/alcedo-cover.jpg","011461be17a656b9a03082fe27612fd4"],["/assets/img/posts/alcedo-cover_lg.jpg","1727aa00e95c0b253f9c2ae95aa44eab"],["/assets/img/posts/alcedo-cover_md.jpg","b411ae89fbb9e4bdce6253b1f943e81a"],["/assets/img/posts/alcedo-cover_placehold.jpg","1ecefe1fdfd12e983ffce367cc557c59"],["/assets/img/posts/alcedo-cover_sm.jpg","a07718c7661ca72a23f1ca44515a4945"],["/assets/img/posts/alcedo-cover_thumb.jpg","5162396edd28416327849784c57ae50c"],["/assets/img/posts/alcedo-cover_thumb@2x.jpg","3accb277d6c4a9ccecef356b9af5983f"],["/assets/img/posts/alcedo-cover_xs.jpg","99220518377df2a4aadd636bf89816d1"],["/assets/img/posts/citep.jpg","269b99722a6c1e7158a896f81a4f3d6a"],["/assets/img/posts/citep_lg.jpg","3acea18ee49c01bb04a1372798475f46"],["/assets/img/posts/citep_md.jpg","80ebb462ff00cfa64441e495e7c6b186"],["/assets/img/posts/citep_placehold.jpg","c722a2d5112b4a35a2f952871a82edb1"],["/assets/img/posts/citep_sm.jpg","d1a8afc832ce0a4e09d134c0449d0a0b"],["/assets/img/posts/citep_thumb.jpg","1449a18ef1c35fa32a87d094056e4052"],["/assets/img/posts/citep_thumb@2x.jpg","f3dbcf9d2ba9b4ab2593738a7a778bd4"],["/assets/img/posts/citep_xs.jpg","ed8cfd1e5fe2c3f2ea00a392ce9533d4"],["/assets/img/posts/explorarHD.jpg","53426996d984c4fb34d4451c5c914cde"],["/assets/img/posts/explorarHD_lg.jpg","53426996d984c4fb34d4451c5c914cde"],["/assets/img/posts/explorarHD_md.jpg","3a8e946d20f0306310d4eb68e2e21949"],["/assets/img/posts/explorarHD_placehold.jpg","ef9d3d0a64188661149be3404cbf1b63"],["/assets/img/posts/explorarHD_sm.jpg","56f4f33d69bb96c66dc9839812cf6d52"],["/assets/img/posts/explorarHD_thumb.jpg","0dbcf018e612f803b52b3bf19bdd7fc3"],["/assets/img/posts/explorarHD_thumb@2x.jpg","53426996d984c4fb34d4451c5c914cde"],["/assets/img/posts/explorarHD_xs.jpg","9421f283ae79ab7176fdc69968619984"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/assets/juliana-micrositio.jpg","3a9aec02f4cf40f3ae5e0680bf56d2ef"],["/bigdatahd-ciclo-explorar-las-humanidades-digitales/index.html","79d4f6ddd096f93c62da12b06e903a32"],["/categories/index.html","b368ff779cd221155c5baf2d8f15dcb5"],["/congreso-adho-2018-en-ciudad-de-mexico/index.html","591e4eb8d5b9c1b2394a4540a3316781"],["/contacto/index.html","a5d4d615143f2e887df400453751eae1"],["/cursosyeventos/index.html","e3abfb195e8e7ae566cb3ffe97431819"],["/equipo/index.html","e233a389b4fc4f28253f67d5a70bd1ae"],["/hdcaicytlab-en-la-conferencia-dh2018-de-ciudad-de-mexico/index.html","837cf2eeb80a27a1e696da4afd715c33"],["/humanidades-digitales-en-el-instituto-de-historia-argentina-y-americana-dr-emilio-ravignani/index.html","3d819aa0f98821d739d6de7e42d4a8a7"],["/index.html","1b9e6ec8d4fe660999bc39d1c5d85461"],["/latam-un-gazetteer-historico-para-america-latina-y-el-caribe/index.html","d9f6493a6b13bdd78b69f33eea054c78"],["/novedades/index.html","9182a05d11d0839ffb3aa943366dfc41"],["/presentacion-de-revista-incipit-digital/index.html","8f3ebaac75c55d6c42e08a7b2029ecb0"],["/proyectos/index.html","830143184232020c9f006af6b1241fdb"],["/publicaciones/index.html","3fa63572431c69b5f6bc436460175c6b"],["/sw.js","95f34dbb00157510a07cd83a6f02f827"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







