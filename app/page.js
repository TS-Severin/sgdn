import { getHomepage } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";

export default async function Home() {
  const { isEnabled } = draftMode();
  const homepage = await getHomepage(isEnabled);

  return (
    <>
      <h1 className="font-roboto-condensed text-3xl sm:text-6xl sm:leading-[4rem]  pb-4">{homepage[0].titel}</h1>
      <h1 className="font-roboto-condensed text-2xl sm:text-5xl sm:leading-[3.5rem]  pb-4 text-gray-800">{documentToReactComponents(homepage[0].kurzesIntro.json)}</h1>
      <div className="font-roboto-condensed sm:text-3xl sm:leading-10 text-gray-800">
        {documentToReactComponents(homepage[0].langesIntro.json)}
      </div>
    </>

  );
}