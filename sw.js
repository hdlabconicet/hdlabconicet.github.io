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

var precacheConfig = [["/2-encuentro-ciclo-Explorar-HD-CITEP-UBA/index.html","6af76917c5731f18f2bbaba80cf4364e"],["/3-encuentro-ciclo-Explorar-HD-cronotopo/index.html","35cc7b35850bda4d3b50b9c0ec1f1aba"],["/4-encuentro-ciclo-Explorar-HD-PLN/index.html","f299f11836f0d697835e57f40b80b42a"],["/404.html","fdbe92c42347a7ef37d0a667891f23b6"],["/assets/css/main.css","ece10e1ac7d9e87242a8df741a3016dd"],["/assets/img/equipo/Diego-micrositio.jpg","e88ae5c771b2e33eaf05d1b3895a0ed8"],["/assets/img/equipo/Gabriel-micrositio.jpg","e221bac223ba113ca072e4b2894170eb"],["/assets/img/equipo/Gabriela-micrositio.png","25695073c3a6b498a33560d78e708808"],["/assets/img/equipo/Gimena-micrositio.jpg","5461da40d245070182af0c5e55b670a7"],["/assets/img/equipo/Nidia-micrositio.jpg","37c307955b25802f447b75c0bf2938b4"],["/assets/img/equipo/Romina-micrositio.jpg","7667797c36fc473610203fff49c0c4f4"],["/assets/img/equipo/juliana-micrositio.jpg","3a9aec02f4cf40f3ae5e0680bf56d2ef"],["/assets/img/equipo/marisol-micrositio.jpg","e01b5481e22d84c9987eeee2e8400a3c"],["/assets/img/equipo/virginia-micrositio.jpg","fffa9cf199a4a35571dd8a1da0dcccdd"],["/assets/img/icons/favicon-16x16.png","b3740a7fd9292707b38ae60889ba446f"],["/assets/img/posts/ADHO2018-Mexico.jpg","e2cbce6f33b5304a538575ad0d86318b"],["/assets/img/posts/ADHO2018-Mexico_lg.jpg","e20124355f0bd89edfed5f41c1808dd0"],["/assets/img/posts/ADHO2018-Mexico_md.jpg","6530ce539dfce80c8a1c1bba0e1c097a"],["/assets/img/posts/ADHO2018-Mexico_placehold.jpg","54fae6727d6dc8d8cc0261b9ebfda2b9"],["/assets/img/posts/ADHO2018-Mexico_sm.jpg","4ab424a93df5781066fad73003e665f4"],["/assets/img/posts/ADHO2018-Mexico_thumb.jpg","6c3096258b99e18e53f325cec3b999ac"],["/assets/img/posts/ADHO2018-Mexico_thumb@2x.jpg","b1a6d8c1bd4069ce4a22a16bf3d692b1"],["/assets/img/posts/ADHO2018-Mexico_xs.jpg","fb07a709f1cfa07661506c0c5cbfc4f2"],["/assets/img/posts/ADHO2018-Puentes.jpg","d079db599757b3c428b007eea387f0a9"],["/assets/img/posts/ADHO2018-Puentes_lg.jpg","d079db599757b3c428b007eea387f0a9"],["/assets/img/posts/ADHO2018-Puentes_md.jpg","b2f636cd34940a4477328006814d9b81"],["/assets/img/posts/ADHO2018-Puentes_placehold.jpg","5ea68be1d593727b214c5f6487f5d311"],["/assets/img/posts/ADHO2018-Puentes_sm.jpg","64403f5c6ce25c404135af269389897f"],["/assets/img/posts/ADHO2018-Puentes_thumb.jpg","4dc11a536f72d31382b9d9ed2af4a490"],["/assets/img/posts/ADHO2018-Puentes_thumb@2x.jpg","94700200970689903ef6d47e61fbd6d2"],["/assets/img/posts/ADHO2018-Puentes_xs.jpg","ded3ee72613719d0836480f84a8a2902"],["/assets/img/posts/AntConc-logo.png","c66bb375d318b0c36d61d79edd85fabf"],["/assets/img/posts/CITEP-Marisol-2018.jpg","bb445ddcf535b24697b222dd296b1318"],["/assets/img/posts/DH-curso-verano-Madrid-2018-Gimena.jpg","25fe622a875052c7ba608c2c02240915"],["/assets/img/posts/FSCI-2018.jpg","07df8f4697b88c2e49ffc19253a92f61"],["/assets/img/posts/FSCI-2018_lg.jpg","07df8f4697b88c2e49ffc19253a92f61"],["/assets/img/posts/FSCI-2018_md.jpg","646105b1f077b3466194017aa50c7005"],["/assets/img/posts/FSCI-2018_placehold.jpg","4d8948db362760cf1427ad86c1583a6e"],["/assets/img/posts/FSCI-2018_sm.jpg","721b6eb95c7a9f38535f128ac5b7def5"],["/assets/img/posts/FSCI-2018_thumb.jpg","82fe527a443a0369401293c808690f42"],["/assets/img/posts/FSCI-2018_thumb@2x.jpg","78252551f21e246c9be69538055a734c"],["/assets/img/posts/FSCI-2018_xs.jpg","56bc7eff739e022d7009c3c916c58bdd"],["/assets/img/posts/FSCI2018-Group-Photo.jpg","0d34e3cd99911c61dde7ac802d4d9890"],["/assets/img/posts/HDCAICYTLAB.jpg","0c6e6087e016dbe24d3744ba699f0495"],["/assets/img/posts/HDCAICYTLAB_lg.jpg","0c6e6087e016dbe24d3744ba699f0495"],["/assets/img/posts/HDCAICYTLAB_md.jpg","f098116c78eba596e07841bc162b917d"],["/assets/img/posts/HDCAICYTLAB_placehold.jpg","64ba115f597e2604f4c3dfb044b43cac"],["/assets/img/posts/HDCAICYTLAB_sm.jpg","906034f0fe3c252657611ad8a56a6903"],["/assets/img/posts/HDCAICYTLAB_thumb.jpg","2d061ad7aee4f80ac7329e459aa72813"],["/assets/img/posts/HDCAICYTLAB_thumb@2x.jpg","fcb17682221e73ce625b13c7cacdf615"],["/assets/img/posts/HDCAICYTLAB_xs.jpg","9d76be721bb084f7f7d8b02ef6c53b79"],["/assets/img/posts/Incipit.jpg","fc45556f77ce042533aae514d5388562"],["/assets/img/posts/Incipit_lg.jpg","fc45556f77ce042533aae514d5388562"],["/assets/img/posts/Incipit_md.jpg","fc45556f77ce042533aae514d5388562"],["/assets/img/posts/Incipit_placehold.jpg","7f60c1762453ac2544d2fbd0d5f464d0"],["/assets/img/posts/Incipit_sm.jpg","fc45556f77ce042533aae514d5388562"],["/assets/img/posts/Incipit_thumb.jpg","6b0eb0090a649cc89f79a3eeaaa75006"],["/assets/img/posts/Incipit_thumb@2x.jpg","fc45556f77ce042533aae514d5388562"],["/assets/img/posts/Incipit_xs.jpg","c5d07436a501d33f4ddcd29d6fe5f450"],["/assets/img/posts/Ravignani-membrete-UE.jpg","eee639ef2000be35465c8f1729cd038a"],["/assets/img/posts/Ravignani-membrete-UE_lg.jpg","eee639ef2000be35465c8f1729cd038a"],["/assets/img/posts/Ravignani-membrete-UE_md.jpg","eee639ef2000be35465c8f1729cd038a"],["/assets/img/posts/Ravignani-membrete-UE_placehold.jpg","f6640bb455adeb53a0f5ea2e3ccbe2b5"],["/assets/img/posts/Ravignani-membrete-UE_sm.jpg","eee639ef2000be35465c8f1729cd038a"],["/assets/img/posts/Ravignani-membrete-UE_thumb.jpg","eee639ef2000be35465c8f1729cd038a"],["/assets/img/posts/Ravignani-membrete-UE_thumb@2x.jpg","eee639ef2000be35465c8f1729cd038a"],["/assets/img/posts/Ravignani-membrete-UE_xs.jpg","eee639ef2000be35465c8f1729cd038a"],["/assets/img/posts/Tapa-Incipit.jpg","891a1fef1539d0fb9bfffcacc073ff36"],["/assets/img/posts/Tapa-Incipit_lg.jpg","891a1fef1539d0fb9bfffcacc073ff36"],["/assets/img/posts/Tapa-Incipit_md.jpg","891a1fef1539d0fb9bfffcacc073ff36"],["/assets/img/posts/Tapa-Incipit_placehold.jpg","ee3ebf0b9bae50a3a76f6916994610a4"],["/assets/img/posts/Tapa-Incipit_sm.jpg","891a1fef1539d0fb9bfffcacc073ff36"],["/assets/img/posts/Tapa-Incipit_thumb.jpg","a6fb8ed0b718cf55accdb314a66ab2f5"],["/assets/img/posts/Tapa-Incipit_thumb@2x.jpg","891a1fef1539d0fb9bfffcacc073ff36"],["/assets/img/posts/Tapa-Incipit_xs.jpg","e8b1c5c24236ed80d7a022fbb986f982"],["/assets/img/posts/adventure-ancient-antique-697662.jpg","ca4ed555b6a09ade9b177346b8e2377d"],["/assets/img/posts/adventure-ancient-antique-697662_lg.jpg","7e457a99b4c7005e22281d21b7480f07"],["/assets/img/posts/adventure-ancient-antique-697662_md.jpg","0e43bf45fa560b8a9e955d51527addb5"],["/assets/img/posts/adventure-ancient-antique-697662_placehold.jpg","e3f44138ce66b2a56ebdf987dd2aeda0"],["/assets/img/posts/adventure-ancient-antique-697662_sm.jpg","e96af65edda164ae58854eb995709d5f"],["/assets/img/posts/adventure-ancient-antique-697662_thumb.jpg","30eb2b43008895c79dcc3f69c6998fe7"],["/assets/img/posts/adventure-ancient-antique-697662_thumb@2x.jpg","ebd59127e5c375b8e7ce1eb250d07722"],["/assets/img/posts/adventure-ancient-antique-697662_xs.jpg","054c10263d4e97e18743316ad88681a4"],["/assets/img/posts/adventure-ancient.jpg","ddcd6c415f37bde90b42504d27829a0d"],["/assets/img/posts/adventure-ancient_lg.jpg","ef2e8c544a0904ee93842ae96dff0105"],["/assets/img/posts/adventure-ancient_md.jpg","ac7651bee2f197cff584ea9586279570"],["/assets/img/posts/adventure-ancient_placehold.jpg","63d2afb65cf3b2f1b7cb8689636b7ce5"],["/assets/img/posts/adventure-ancient_sm.jpg","ea1ff5ee6b0700702c5a3c4f8764fe36"],["/assets/img/posts/adventure-ancient_thumb.jpg","d8eaaf1c9f00d73f6ab791f7c7c7525d"],["/assets/img/posts/adventure-ancient_thumb@2x.jpg","036ebffc23549bbac26aa5cbe05b3e94"],["/assets/img/posts/adventure-ancient_xs.jpg","8eec3263c4182f6e1d084a8532ffacfe"],["/assets/img/posts/alcedo-cover.jpg","0b8725ef44c883a8ccd82b8a49fa4fc1"],["/assets/img/posts/alcedo-cover_lg.jpg","0ffe77b2360b205738252dc408e48173"],["/assets/img/posts/alcedo-cover_md.jpg","d5092c8a38bb85068f850eedb4c9b702"],["/assets/img/posts/alcedo-cover_placehold.jpg","7fcb47290b457555d39b8370b6be8bee"],["/assets/img/posts/alcedo-cover_sm.jpg","47650da76b38e412acc28955f4c2abf3"],["/assets/img/posts/alcedo-cover_thumb.jpg","3a1b47c76c3c917f31dfa7860985eb8c"],["/assets/img/posts/alcedo-cover_thumb@2x.jpg","38da583a804b6b9618d72c16467db40c"],["/assets/img/posts/alcedo-cover_xs.jpg","940a6207e4c08288fe63e6922a18844d"],["/assets/img/posts/big-data-ignite.jpg","0df3ae386700e909c88d2c6c2821d7d4"],["/assets/img/posts/big-data-ignite_lg.jpg","0df3ae386700e909c88d2c6c2821d7d4"],["/assets/img/posts/big-data-ignite_md.jpg","0df3ae386700e909c88d2c6c2821d7d4"],["/assets/img/posts/big-data-ignite_placehold.jpg","8150bbfdd2dba07724fd2ce05bc08578"],["/assets/img/posts/big-data-ignite_sm.jpg","f350c3ccb10e73cbe61f21c38bfba30c"],["/assets/img/posts/big-data-ignite_thumb.jpg","3adac9d8dc62f4d5eac7b58aa2752dfb"],["/assets/img/posts/big-data-ignite_thumb@2x.jpg","0df3ae386700e909c88d2c6c2821d7d4"],["/assets/img/posts/big-data-ignite_xs.jpg","0c5837df485b5fb84c7b1993ae1e8a7e"],["/assets/img/posts/citep-clase-4.jpg","ec5cd0e56f938d46437cc8a9c656c736"],["/assets/img/posts/citep.jpg","e0e14372333cb604986e84160d8c1ac9"],["/assets/img/posts/citep_lg.jpg","4a7be637a700c0f5801615844c9ab515"],["/assets/img/posts/citep_md.jpg","f795e37ede8c9c856b2a960af4b1cfc6"],["/assets/img/posts/citep_placehold.jpg","abc6a785c432f505bdfee90463691a97"],["/assets/img/posts/citep_sm.jpg","026b82cd52c9df5e57bffb4cbca52adc"],["/assets/img/posts/citep_thumb.jpg","08901c182e8d4fd166145e81f7f4c24c"],["/assets/img/posts/citep_thumb@2x.jpg","3d9721259b66c462d90f7eb2e06f1618"],["/assets/img/posts/citep_xs.jpg","a47e6d84ea8579ca32249bc26e076011"],["/assets/img/posts/explorarHD.jpg","2f5720fe453b8bf3a6b9832c907a9fe5"],["/assets/img/posts/explorarHD_lg.jpg","2f5720fe453b8bf3a6b9832c907a9fe5"],["/assets/img/posts/explorarHD_md.jpg","9f97d5e04287be7410d6a6933ef25338"],["/assets/img/posts/explorarHD_placehold.jpg","ceb51cb2c18917ccb0e5458199c565fe"],["/assets/img/posts/explorarHD_sm.jpg","c9a063116a4caa07d73f4881e31d461f"],["/assets/img/posts/explorarHD_thumb.jpg","c668e70fec3aa4e5e4af46b96e9bc1ad"],["/assets/img/posts/explorarHD_thumb@2x.jpg","8f6564ce9531c0fd10d855bc8ef7d74d"],["/assets/img/posts/explorarHD_xs.jpg","014e756218dfea933c5d4ef753ddf08d"],["/assets/img/posts/leipzig-2018-Gimena.jpg","3b26302326eb0ffd01b5de4b40d80ae1"],["/assets/img/posts/logo_ADHO2018-Mexico.png","85f5da8d385c52f2dff835e758edb64d"],["/assets/img/posts/mincyt-hd-rav.png","697a3590b09dd6dcfd7d00beb6f7ec1d"],["/assets/img/posts/retiro-madrid-summer-school.jpg","768717fcc7cca5e76460ec901d9922a7"],["/assets/img/posts/retiro-madrid-summer-school_lg.jpg","768717fcc7cca5e76460ec901d9922a7"],["/assets/img/posts/retiro-madrid-summer-school_md.jpg","e590698eb1b07d56f34d795a0bc3a54f"],["/assets/img/posts/retiro-madrid-summer-school_placehold.jpg","579f8c6977e52a36b01e414381adaaeb"],["/assets/img/posts/retiro-madrid-summer-school_sm.jpg","f5fdb33ce7b13e9139965c8de63bf889"],["/assets/img/posts/retiro-madrid-summer-school_thumb.jpg","976ba69a561436021001d478b9fa3e2f"],["/assets/img/posts/retiro-madrid-summer-school_thumb@2x.jpg","768717fcc7cca5e76460ec901d9922a7"],["/assets/img/posts/retiro-madrid-summer-school_xs.jpg","e82ff825544a123736f86f9ba03f2b87"],["/assets/img/posts/semanadelaciencia-mod.jpg","d3ae6dc0c46c80cec52ca43d656f5aea"],["/assets/img/posts/semanadelaciencia-mod_lg.jpg","d3ae6dc0c46c80cec52ca43d656f5aea"],["/assets/img/posts/semanadelaciencia-mod_md.jpg","d3ae6dc0c46c80cec52ca43d656f5aea"],["/assets/img/posts/semanadelaciencia-mod_placehold.jpg","83fbc4fe35b47f89f3648ca275f579d3"],["/assets/img/posts/semanadelaciencia-mod_sm.jpg","d3ae6dc0c46c80cec52ca43d656f5aea"],["/assets/img/posts/semanadelaciencia-mod_thumb.jpg","183d0fae88b1fd5125952a76a9efc497"],["/assets/img/posts/semanadelaciencia-mod_thumb@2x.jpg","d3ae6dc0c46c80cec52ca43d656f5aea"],["/assets/img/posts/semanadelaciencia-mod_xs.jpg","bc153b5dc8bd173acec54b08b8e48d2c"],["/assets/img/posts/storymaps.jpg","7997a7fbf22aea8bd861f5fe761d2577"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/big-data-ignite/index.html","78653817c9fbd52931f13f2b405d2f6e"],["/bigdatahd-ciclo-explorar-las-humanidades-digitales/index.html","ade84b12fa929f6ec79d9bc965b2f534"],["/categories/index.html","0a08847ab05bedaa306de1d846c72425"],["/congreso-adho-2018-en-ciudad-de-mexico/index.html","ae46967f10dd5d09cde20da2f125c2f8"],["/contacto/index.html","8168dfde46a36dbc6fd5e90d8381a3ac"],["/culture-and-technology-european-summer-university-dh/index.html","5e46b7d415e30f816e4129f8d854be2d"],["/curso-verano-dhmadrid-summer-school-2018/index.html","9d6016b413e2b5cf5fde2a6dca46e83b"],["/cursosyeventos/index.html","bced6e8a24edefbe74d33ce07f18ffd3"],["/editaton-colaborativo-semana-ciencia/index.html","50b691a768c4ae4e1ec56ffa50dc078c"],["/equipo/index.html","f56c07d7b5e6f7492e86e4ba6b5f135f"],["/force11-scholarly-communications-san-diego/index.html","f450c26aa94297ea9bce1ac6be5fa754"],["/hdcaicytlab-en-la-conferencia-dh2018-de-ciudad-de-mexico/index.html","e38b63a352220403c253d233b15fcdb3"],["/humanidades-digitales-en-el-instituto-de-historia-argentina-y-americana-dr-emilio-ravignani/index.html","a79e584c4be301d39ca679802e37575c"],["/latam-un-gazetteer-historico-para-america-latina-y-el-caribe/index.html","352b4d9d8253b87971357143585e4bf3"],["/novedades/index.html","053e354152971a53ac2afbc348935ea0"],["/presentacion-de-revista-incipit-digital/index.html","4e7a8585e9b618ec7d18ea255314c70b"],["/proyectos/index.html","79977cd004d6dd94f712fd9c6e86f493"],["/publicaciones/index.html","004cb470f0c9d5bfbd1c12aa377ab67a"],["/sw.js","3bc127a9321316c0299b81c0076ecac7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







