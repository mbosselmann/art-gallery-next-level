import styles from "./index.module.css";
import Image from "next/image.js";
import FavoriteButton from "@/components/FavoriteButton";

const piece = {
  slug: "majestic-greek-sculpture",
  artist: "Rachel Claire",
  name: "Majestic Greek Sculpture",
  imageSource:
    "https://example-apis.vercel.app/assets/art/majestic-greek-sculpture.jpg",
  year: "2019",
  genre: "Classics",
  colors: ["#978e8b", "#2a201e", "#483833", "#d8d5d8", "#53443b"],
  dimensions: { height: 2880, width: 1920, type: "jpg" },
};

export default function Spotlight() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <FavoriteButton isFavorite={false} positionAbsolute={true} />
        <Image
          className={styles.image}
          src={piece.imageSource}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={`spotlight: ${piece.artist}`}
        />
      </div>
      <h2>{piece.artist}</h2>
    </div>
  );
}
