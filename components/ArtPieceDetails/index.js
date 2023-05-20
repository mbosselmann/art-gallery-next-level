import FavoriteButton from "@/components/FavoriteButton";
import styles from "./index.module.css";
import Image from "next/image";
import Comments from "@/components/Comments";

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

export default function ArtPieceDetailsPage() {
  const { imageSource: image, title, artist, year, genre, colors } = piece;

  return (
    <section className={styles.wrapper}>
      <div className={styles.actionContainer}>
        <FavoriteButton isFavorite={false} />
      </div>
      <h2>{title}</h2>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={image}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={`${artist}: ${title}`}
        />
      </div>
      <ul role="list" className={styles.list}>
        {colors.map((color, index) => (
          <li
            style={{ backgroundColor: color }}
            className={styles.color}
            key={index}
            color={color}
            aria-label={color}
          />
        ))}
      </ul>
      <ul role="list" className={styles.list}>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
      <Comments comments={["pretty", "awesome"]} />
    </section>
  );
}
