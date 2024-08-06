// ==UserScript==
// @name         X - Autoscroll To Bottom
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Automatically scrolls to the bottom of your folower/following list on X / Twitter.
// @author       Daniel Rosehill
// @match       https://x.com/*/following
// @match       http://x.com/*/followers
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    var scrollInterval = 500;

    function isContentLoading() {
        return document.querySelector('div[role="progressbar"]') !== null;
    }

    function scrollDown() {
      
        window.scrollBy(0, 1000);

        if (isContentLoading()) {

            setTimeout(scrollDown, scrollInterval);
        } else {
       
            setTimeout(scrollDown, scrollInterval);
        }
    }
    scrollDown();
})();
