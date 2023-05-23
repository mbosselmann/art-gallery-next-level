"use client";

import Image from "next/image.js";
import styles from "./index.module.css";
import { useArtPiecesContext } from "@/lib/context.js";

// This button is missing an onClick handler
export default function FavoriteButton({ positionAbsolute = false, slug }) {
  const { artPiecesInfo } = useArtPiecesContext();
  const isFavorite = artPiecesInfo.find(
    (artPiece) => artPiece.slug === slug
  )?.isFavorite;
  const { toggleFavorite } = useArtPiecesContext();

  return (
    <button
      className={`${styles.button} ${positionAbsolute ? styles.absolute : ""} ${
        isFavorite ? styles.favorite : ""
      }`}
      type="button"
      aria-label={isFavorite ? "unlike" : "like"}
      onClick={() => toggleFavorite(slug)}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
