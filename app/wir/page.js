import { getWir } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";



export default async function Wir() {
    const { isEnabled } = draftMode();
    const wir = await getWir(isEnabled);
    console.log("wir data", wir);
    return (
        <>
            <div className="sm:flex flex-row">
                <div className="font-roboto sm:w-2/3 sm:mr-4">
                    <h1 className="font-roboto text-4xl pb-4 text-black sm:text-white">{wir[0].titel}</h1>
                    <h3 className="font-roboto text-lg pb-4">{wir[0].head1}</h3>
                    <img src={wir[0].artikelfoto1.url} alt="Übersicht einer Lesung" />
                    <div className="sm:columns-2">{documentToReactComponents(wir[0].paragraph1.json)}</div>
                    <img src={wir[0].artikelfoto2.url} alt="Übersicht einer Lesung" />
                    <h2>{wir[0].head2}</h2>
                    <div className="sm:columns-2">{documentToReactComponents(wir[0].paragraph2.json)}</div>
                </div>

                <div className="sm:w-1/3">
                    <img src={wir[0].kurationFoto.url} alt="Gruppenbild der Kurator*innen" />
                    <h2 className="font-roboto text-pink">{wir[0].kurationTitel}</h2>
                    <div className="font-roboto-condensed">{documentToReactComponents(wir[0].kuratorinnen.json)}</div>
                    <h2 className="font-roboto text-pink">{wir[0].ehemaligeTitel}</h2>
                    <div className="font-roboto-condensed">{documentToReactComponents(wir[0].ehemalige.json)}</div>
                    <h2 className="font-roboto text-pink">{wir[0].kooperationTitel}</h2>
                    <div>{documentToReactComponents(wir[0].kooperationen.json)}</div>
                    <h2 className="font-roboto text-pink">{wir[0].lesereihenTitel}</h2>
                    <div className="font-roboto-condensed">{documentToReactComponents(wir[0].lesereihenText.json)}</div>
                    <img src={wir[0].lesereihenLogo.url} alt="Logo der Unabhängigen Lesereihen e. V." />
                </div>
            </div>
        </>

    );

}





