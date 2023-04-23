import React from "react";
import styles from "./gallery.module.css";

const images = [
  {
    url: "https://images.aircharterservice.com/global/aircraft-guide/cargo-charter/ilyushin-il-76-td-1.jpg",
    alt: "IL-76",
    postName: "aircraft",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Antonov_An-26_of_the_Ukrainian_Air_Force.jpg/1200px-Antonov_An-26_of_the_Ukrainian_Air_Force.jpg",
    alt: "AN-26",
    postName: "aircraft",
  },
  {
    url: "https://cfts.org.ua/imglib/_newimage/news/samolety_an_32_v_ukraine_ne_propadali_minoborony_indii_26012/1068.jpg",
    alt: "AN-32",
    postName: "aircraft",
  },
];

const GalleryPage = () => {
  return (
    <ul className={styles["gallery"]}>
      {images.map((image) => (
        <li className={styles["item"]}>
          <img src={image.url} alt={image.alt}></img>
          <p>{image.postName}</p>
        </li>
      ))}
    </ul>
  );
};

export default GalleryPage;