import React from "react";
import { Link, useLocation } from "react-router-dom";

import { appRouts } from "../../routs/Routs";

import styles from "./nav.module.css";

const Nav = () => {
  const location = useLocation();
  let locationPath = location.pathname;
  let bcgColor = "contact-nav";
  switch (locationPath) {
    case "/spa-navigation/public":
      bcgColor = "public-nav";
      break;
    case "/spa-navigation/gallery":
      bcgColor = "gallery-nav";
      break;
    case "/spa-navigation/":
      bcgColor = "home-nav";
      break;
    default:
      bcgColor = "contact-nav";
      break;
  }
  return (
    <header className={styles[bcgColor]}>
      <Link to={appRouts.home.path}>Home</Link>
      <Link to={appRouts.publicPage.path}>Public</Link>
      <Link to={appRouts.gallery.path}>Gallery</Link>
      <Link to={appRouts.contact.path}>Contacts</Link>
    </header>
  );
};

export default Nav;