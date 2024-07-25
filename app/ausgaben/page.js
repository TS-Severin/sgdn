import { getAllAusgaben } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";

export default async function () {
    const { isEnabled } = draftMode();
    const ausgaben = await getAllAusgaben(isEnabled);
    console.log("ausgaben data", ausgaben);
    return (
        <>
            <h1>Ausgaben</h1>

        </>
    );
}