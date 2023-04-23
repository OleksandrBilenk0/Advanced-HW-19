import React from "react";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div className={styles["container-home"]}>
      <div className={styles["thumb"]}>
        <img
          src="https://files.worldwildlife.org/wwfcmsprod/images/cutting_aviation_pollution_airplane_at_sunset_shutterstock/story_full_width/2act785jsq_cutting_aviation_pollution_airplane_at_sunset_shutterstock.jpg"
          alt="aircraft"
        ></img>
        <p>
          Aviation includes the activities surrounding mechanical flight and the
          aircraft industry. Aircraft includes fixed-wing and rotary-wing types,
          morphable wings, wing-less lifting bodies, as well as lighter-than-air
          craft such as hot air balloons and airships. Aviation began in the
          18th century with the development of the hot air balloon, an apparatus
          capable of atmospheric displacement through buoyancy. Some of the most
          significant advancements in aviation technology came with the
          controlled gliding flying of Otto Lilienthal in 1896; then a large
          step in significance came with the construction of the first powered
          airplane by the Wright brothers in the early 1900s.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

