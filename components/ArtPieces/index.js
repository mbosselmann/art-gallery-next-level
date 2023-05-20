import ArtPiecePreview from "@/components/ArtPiecePreview";
import styles from "./index.module.css";

const pieces = [
  {
    slug: "body-of-water",
    artist: "Jeremy Bishop",
    name: "Body of Water",
    imageSource: "https://example-apis.vercel.app/assets/art/body-of-water.jpg",
    year: "2017",
    genre: "Nature",
    colors: ["#203f4a", "#9ca1a5", "#2d738d", "#3a8bb1", "#74a5bf"],
    dimensions: { height: 2880, width: 1920, type: "jpg" },
  },
  {
    slug: "man-digital-illustration",
    artist: "Francesco Ungaro",
    name: "Man Digital Illustration",
    imageSource:
      "https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg",
    year: "2006",
    genre: "Modern Art",
    colors: ["#3d803b", "#073204", "#c5dedb", "#90b59f", "#afc6b5"],
    dimensions: { height: 2581, width: 1920, type: "jpg" },
  },
  {
    slug: "woman-statue",
    artist: "Zack Jarosz",
    name: "Woman Statue",
    imageSource: "https://example-apis.vercel.app/assets/art/woman-statue.jpg",
    year: "2017",
    genre: "Classics",
    colors: ["#161616", "#c9c8c5", "#6b6a69", "#8c8c89", "#8c848c"],
    dimensions: { height: 2880, width: 1920, type: "jpg" },
  },
  {
    slug: "majestic-greek-sculpture",
    artist: "Rachel Claire",
    name: "Majestic Greek Sculpture",
    imageSource:
      "https://example-apis.vercel.app/assets/art/majestic-greek-sculpture.jpg",
    year: "2019",
    genre: "Classics",
    colors: ["#978e8b", "#2a201e", "#483833", "#d8d5d8", "#53443b"],
    dimensions: { height: 2880, width: 1920, type: "jpg" },
  },
];

export default function ArtPieces() {
  return (
    <ul className={styles.list}>
      {pieces.map((piece) => (
        <li key={piece.slug} className={styles.item}>
          <ArtPiecePreview piece={piece} />
        </li>
      ))}
    </ul>
  );
}
