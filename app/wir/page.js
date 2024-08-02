import { getWir } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";
import Image from "next/image";



export default async function Wir() {
    const { isEnabled } = draftMode();
    const wir = await getWir(isEnabled);
    return (
        <>
            <div className="pt-2 pb-8 sm:flex flex-row">
                <div className="font-roboto sm:w-2/3 sm:mr-4">
                    <h1 className="font-roboto text-4xl pb-4 text-black sm:text-white">{wir[0].titel}</h1>
                    <h3 className="font-roboto text-lg pb-4">{wir[0].head1}</h3>
                    <img className="py-2" src={wir[0].artikelfoto1.url} alt="Übersicht einer Lesung" />
                    <div className="py-2 font-roboto-condensed sm:columns-2">{documentToReactComponents(wir[0].paragraph1.json)}</div>
                    <img className="py-2" src={wir[0].artikelfoto2.url} alt="Übersicht einer Lesung" />
                    <h3 className="font-roboto text-lg pb-4">{wir[0].head2}</h3>
                    <div className="py-2 font-roboto-condensed sm:columns-2">{documentToReactComponents(wir[0].paragraph2.json)}</div>
                </div>

                <div className="sm:w-1/3">
                    <Image

                        className="py-2"

                        src={wir[0].kurationFoto.url}
                        alt="Gruppenbild der Kurator*innen"
                        width={400}
                        height={300} />
                    <h2 className="py-2 font-roboto text-pink">{wir[0].kurationTitel}</h2>
                    <div className="font-roboto-condensed">{documentToReactComponents(wir[0].kuratorinnen.json)}</div>
                    <h2 className="ry-2 font-roboto text-pink">{wir[0].ehemaligeTitel}</h2>
                    <div className="font-roboto-condensed">{documentToReactComponents(wir[0].ehemalige.json)}</div>
                    <h2 className="py-2 font-roboto text-pink">{wir[0].kooperationTitel}</h2>
                    <div>{documentToReactComponents(wir[0].kooperationen.json)}</div>
                    <h2 className="py-2 font-roboto text-pink">{wir[0].lesereihenTitel}</h2>
                    <div className="font-roboto-condensed">{documentToReactComponents(wir[0].lesereihenText.json)}</div>
                    <img className="py-2" src={wir[0].lesereihenLogo.url} alt="Logo der Unabhängigen Lesereihen e. V." />
                </div>
            </div>
        </>

    );

}





