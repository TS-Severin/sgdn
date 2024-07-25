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
  console.log("landingpage data: ", landingpage);
  console.log("articles data: ", articles);
  console.log("homepage data: ", homepage);
  console.log("wir data", wir);
  // {documentToReactComponents(homepage[0].langesIntro.json)}
  //  {homepagepage[0].title}
  return (
    <>
      <h1>{homepage[0].titel}</h1>
      <h2>{documentToReactComponents(homepage[0].kurzesIntro.json)}</h2>
      <div>
        {documentToReactComponents(homepage[0].langesIntro.json)}
      </div>
    </>

  );
}