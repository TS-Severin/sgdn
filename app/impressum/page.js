import { getImpressum } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";

export default async function Impressum() {
    const { isEnabled } = draftMode();
    const impressum = await getImpressum(isEnabled);
    console.log("impressum: ", impressum);
    return (
        <>
            <h1 className="text-4xl font-roboto pb-4">{impressum[0].titel}</h1>
            <div className="font-roboto pt-4">{documentToReactComponents(impressum[0].impressum.json)}</div>
        </>
    );
}