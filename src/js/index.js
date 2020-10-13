import "./store";

import "alpinejs";
import "lazysizes";
import "unfetch/polyfill";

import Swup from "swup";
import SwupPreloadPlugin from "@swup/preload-plugin";

import smoothscroll from "smoothscroll-polyfill";

import "@components";
import { is, ready, resized, scrolled } from "@utils";

/**
 * Polyfill for scroll-behavior .scrollIntoView and .scroll
 * https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
 *
 * Demo: http://iamdustan.com/smoothscroll/
 */
smoothscroll.polyfill();

window.addEventListener("touchmove", () => {});
document.body.parentNode.classList.add(is.touch ? "touch" : "mouse");

ready(() => {
  resized(window.App);
  scrolled(window.App);
});

// var swup = new Swup({
//   cache: false,
//   containers: ["#root"],
//   animationSelector: "[data-transition-delay]",
//   plugins: [new SwupPreloadPlugin()],
// });
