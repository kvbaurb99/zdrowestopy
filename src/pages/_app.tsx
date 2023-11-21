import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
