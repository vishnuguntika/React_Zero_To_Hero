/**
 * HMR - Hot Module Replacement
 * File Watcher Algorithm -  Written in C++
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production Build
 * Super fast build algorithm
 * Image Optimization
 * Caching while Development
 * Compression
 * Compatable with older versions of browser
 * HTTPS on dev
 * port Number
 * Consistent with Hashing Algorithm
 * Zero Config
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },

  "Namaste Everyone!"
);

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },

  [heading, heading1, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
// render - it takes the react element, and modifies the react dom
// root.render(heading);

// Learn about async and defer
root.render(container);
