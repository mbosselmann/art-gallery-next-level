"use client";

import { useArtPiecesContext } from "@/lib/context.js";
import ArtPieces from "../ArtPieces/index.js";

export default function PageContent({ pieces }) {
  const { artPiecesInfo } = useArtPiecesContext();
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );
  return <ArtPieces pieces={favorites} />;
}
