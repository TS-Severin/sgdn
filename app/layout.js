import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { Inter, Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-roboto'
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-roboto-condensed'
});

export const metadata = {
  title: "Schreiben gegen die Normen",
  description: "Schreiben gegen die Normen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${roboto.variable} ${robotoCondensed.variable}`}>
        <Header />
        <main>{children}</main>
        <div className="flex-1"></div>
        <Footer />

      </body>
    </html>
  );
}

