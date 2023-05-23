import Spotlight from "@/components/Spotlight";
import fetchArtPieces from "@/lib/fetchArtPieces.js";

export default async function Home() {
  const pieces = await fetchArtPieces();
  const randomArtPiece = pieces[Math.floor(Math.random() * pieces.length - 1)];
  return (
    <>
      <h1>Random Art Piece</h1>
      <Spotlight piece={randomArtPiece} />
    </>
  );
}
