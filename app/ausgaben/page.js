import { getAllAusgaben } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";

export default async function Ausgabe() {
    const { isEnabled } = draftMode();
    const ausgaben = await getAllAusgaben(isEnabled);
    console.log("ausgaben data", ausgaben);

    return (

        <>
            <div>
                {ausgaben.map((ausgabe, index) => (
                    <div key={ausgabe.sys.id}>
                        <h1>{ausgabe.ausgabeNummer}</h1>
                        <p className="text-gray-700 mb-2">{ausgabe.datumZeit}</p>

                        <p className="text-gray-700 mb-2">{ausgabe.lesendeNamen.replace(/\n/g, ', ')}</p>
                        <p className="text-gray-700 mb-2"><span className="font-bold">{ausgabe.ortTitel}</span> {ausgabe.ortDetails}</p>
                        <p className="text-gray-700 mb-2"><span className="font-bold">{ausgabe.moderation}</span> {ausgabe.moderationNamen}</p>
                        <a href={ausgabe.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Watch the video</a>
                        <div className="mt-4">
                            {ausgabe.fotosAusgabeCollection.items.map((foto, index) => (
                                <img key={index} src={foto.url} alt={`Foto ${index + 1}`} className="w-full h-auto mb-2" />
                            ))}
                        </div>
                        <div>{documentToReactComponents(ausgabe.lesendeBios.json)}</div>

                    </div>




                ))}
            </div>
        </>

    );
};