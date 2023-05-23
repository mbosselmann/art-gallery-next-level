"use client";

import { createContext, useState, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";

export const ArtPiecesInfoContext = createContext();

export const ArtPiecesInfoContextProvider = ({ children }) => {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  function toggleFavorite(artPieceSlug) {
    const artPiece = artPiecesInfo.find(
      (piece) => piece?.slug === artPieceSlug
    );
    if (artPiece) {
      return setArtPiecesInfo(
        artPiecesInfo.map((piece) =>
          piece.slug === artPieceSlug
            ? {
                slug: artPieceSlug,
                isFavorite: piece.isFavorite ? !piece.isFavorite : true,
              }
            : piece
        )
      );
    } else {
      return setArtPiecesInfo([
        ...artPiecesInfo,
        { slug: artPieceSlug, isFavorite: true },
      ]);
    }
  }

  function addComment(artPieceSlug, newComment) {
    const artPiece = artPiecesInfo.find(
      (piece) => piece?.slug === artPieceSlug
    );
    console.log(artPiece);
    console.log(artPieceSlug, newComment);
    if (artPiece) {
      return setArtPiecesInfo(
        artPiecesInfo.map(
          (piece) =>
            piece.slug === artPieceSlug && {
              ...artPiece,
              comments: artPiece.comments
                ? [...artPiece.comments, newComment]
                : [newComment],
            }
        )
      );
    } else {
      return setArtPiecesInfo([
        ...artPiecesInfo,
        { slug: artPieceSlug, comments: [newComment] },
      ]);
    }
  }

  return (
    <ArtPiecesInfoContext.Provider
      value={{ artPiecesInfo, toggleFavorite, addComment }}
    >
      {children}
    </ArtPiecesInfoContext.Provider>
  );
};

export function useArtPiecesContext() {
  return useContext(ArtPiecesInfoContext);
}
