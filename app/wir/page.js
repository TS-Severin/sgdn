import { getWir } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";



export default async function Wir() {
    const { isEnabled } = draftMode();
    const wir = await getWir(isEnabled);
    console.log("wir data", wir);
    return (

        <h1>{wir[0].titel}</h1>

    );

}