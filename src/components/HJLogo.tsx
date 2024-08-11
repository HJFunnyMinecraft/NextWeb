import React from "react";
import Image from "next/image";
import styles from "./HJLogo.module.css";

export default function HJLogo() {
  return (
    <Image
      src="https://mc.hjfunny.site/wp-content/uploads/2023/06/cropped-hjmc_logo_new-192x192.jpg"
      width={48}
      height={48}
      alt="hjfunny"
      className={styles.wrapper}
    ></Image>
  );
}
