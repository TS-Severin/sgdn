import { getAllArticles, getLandingpage, getHomepage } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";

export default async function Home() {
  const { isEnabled } = draftMode();
  const articles = await getAllArticles(3, isEnabled);
  const landingpage = await getLandingpage();
  const homepage = await getHomepage(isEnabled);

  return (
    <>
      <h1 className="font-roboto text-4xl pb-4">{homepage[0].titel}</h1>
      <h2 className="font-roboto text-lg pb-4">{documentToReactComponents(homepage[0].kurzesIntro.json)}</h2>
      <div>
        {documentToReactComponents(homepage[0].langesIntro.json)}
      </div>
    </>

  );
}