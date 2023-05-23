import fetchArtPieces from "@/lib/fetchArtPieces.js";
import ArtPieceDetails from "../../../components/ArtPieceDetails";

export default async function Page({ params }) {
  const { slug } = params;
  const pieces = await fetchArtPieces();
  const selectedPiece = pieces.find((piece) => piece.slug === slug);

  return (
    <>
      <header>
        <h1>Majestic Greek Sculpture</h1>
      </header>
      <ArtPieceDetails piece={selectedPiece} />
    </>
  );
}
