import PageContent from "@/components/PageContent/index.js";
import fetchArtPieces from "@/lib/fetchArtPieces.js";

export default async function Page() {
  const pieces = await fetchArtPieces();
  return (
    <>
      <header>
        <h1>Your favorite Art Pieces</h1>
      </header>
      <PageContent pieces={pieces} />
    </>
  );
}
