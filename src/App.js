import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";

/*
 * Header
 *    - Logo(title)
 *    - Nav Items (Right side)
 *    - Cart
 * Body
 *  - Search Bar
 *  - Restaurant List
 *    - Restaurant Card (many cards)
 *      - Image
 *      - Rating
 *      - Cuisines
 *
 * Footer
 *   - Links
 *   - Copyrights
 */

// JSX must have one parent component
// React.Fragment is a component from React. It is a like a empty tag.
const AppLayout = () => {
  return (
    // React.Fragment is also written as empty tag
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
