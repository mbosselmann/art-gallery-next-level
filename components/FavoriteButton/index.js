import Image from "next/image.js";
import styles from "./index.module.css";

// This button is missing an onClick handler
export default function FavoriteButton({
  isFavorite,
  positionAbsolute = false,
}) {
  return (
    <button
      className={`${styles.button} ${positionAbsolute ? styles.absolute : ""} ${
        isFavorite ? styles.favorite : ""
      }`}
      type="button"
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
