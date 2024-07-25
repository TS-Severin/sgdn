import { getWir } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";



export default async function Wir() {
    const { isEnabled } = draftMode();
    const wir = await getWir(isEnabled);
    console.log("wir data", wir);
    return (
        <>
            <h1>{wir[0].titel}</h1>
            <h2>{wir[0].head1}</h2>
            <img src={wir[0].artikelfoto1.url} alt="Übersicht einer Lesung" />
            <div>{documentToReactComponents(wir[0].paragraph1.json)}</div>
            <img src={wir[0].artikelfoto2.url} alt="Übersicht einer Lesung" />
            <h2>{wir[0].head2}</h2>
            <div>{documentToReactComponents(wir[0].paragraph2.json)}</div>
            <img src={wir[0].kurationFoto.url} alt="Gruppenbild der Kurator*innen" />
            <h2>{wir[0].kurationTitel}</h2>
            <div>{documentToReactComponents(wir[0].kuratorinnen.json)}</div>
            <h2>{wir[0].ehemaligeTitel}</h2>
            <div>{documentToReactComponents(wir[0].ehemalige.json)}</div>
            <h2>{wir[0].kooperationTitel}</h2>
            <div>{documentToReactComponents(wir[0].kooperationen.json)}</div>
            <h2>{wir[0].lesereihenTitel}</h2>
            <div>{documentToReactComponents(wir[0].lesereihenText.json)}</div>
            <img src={wir[0].lesereihenLogo.url} alt="Logo der Unabhängigen Lesereihen e. V." />
        </>

    );

}





