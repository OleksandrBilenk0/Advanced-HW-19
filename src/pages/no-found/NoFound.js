import React from "react";
import styles from "./noFound.module.css";

const NoFound = () => {
  return (
    <div className={styles["not-found"]}>
      <h1>404</h1>
      <h2>There isn't a pages here.</h2>
    </div>
  );
};

export default NoFound;