import Navigation from "@/components/Navigation";
import "./globals.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import { ArtPiecesInfoContextProvider } from "@/lib/context.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Art Gallery",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <ArtPiecesInfoContextProvider>
            {children}
          </ArtPiecesInfoContextProvider>
        </main>
        <Navigation />
      </body>
    </html>
  );
}
