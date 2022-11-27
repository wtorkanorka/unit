import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import img3 from "../../../../assets/images/design-img3.jpg";
import img4 from "../../../../assets/images/design-img4.jpg";
import img5 from "../../../../assets/images/design-img5.jpg";
import img6 from "../../../../assets/images/design-img6.jpg";
import img7 from "../../../../assets/images/design-img7.jpg";

import img10 from "../../../../assets/images/design-img10.jpg";
import styles from "./OurProjects.module.css";

export function OurProjects() {
  const itemData = [
    {
      img: `${img10}`,
      title: "Burger",
    },
    {
      img: `${img3}`,
      title: "Camera",
    },
    {
      img: `${img4}`,
      title: "Coffee",
    },
    {
      img: `${img5}`,
      title: "Hats",
    },
    {
      img: `${img6}`,
      title: "Honey",
    },
    {
      img: `${img7}`,
      title: "Basketball",
    },
  ];
  return (
    <div className={styles["our"]}>
      <h2 className={styles["title"]}>Фото портфолио</h2>
      <ImageList sx={{ width: 100, height: 200 }} cols={2} rowHeight={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
