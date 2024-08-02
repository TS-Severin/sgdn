
import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";
import CarouselComponent from "../../components/CarouselComponent";
import { getAllAusgaben } from "@/lib/api";

export default async function Ausgabe() {
    const { isEnabled } = draftMode();
    const ausgaben = await getAllAusgaben(isEnabled);





    return (

        <>

            <div>
                {ausgaben.map((ausgabe) => (
                    <div key={ausgabe.sys.id} className="pb-12">



                        {ausgabe.fotosAusgabeCollection.items.length > 0 ? (



                            <CarouselComponent images={ausgabe.fotosAusgabeCollection.items} />


                        ) : (
                            <p>No images available</p>
                        )}

                        <div className="flex flex-col sm:flex-row-reverse">

                            <div className="sm:w-1/3 font-roboto py-1">
                                <h1 className="text-pink text-3xl uppercase font-bold pb-1">{ausgabe.ausgabeNummer}</h1>
                                <h1 className="text-pink text-3xl uppercase font-bold py-1">{ausgabe.datumZeit}</h1>

                                <h2 className="text-3xl font-bold pt-1 pb-4">{ausgabe.lesendeNamen.replace(/\n/g, '')}</h2>


                                <h4 className="text-pink uppercase font-bold py-1">
                                    {ausgabe.ortTitel}
                                </h4>

                                <p className="font-bold py-1">{ausgabe.ortDetails}</p>




                                <h4 className="text-pink uppercase font-bold py-1">

                                    {ausgabe.moderation}</h4>
                                <p className="font-bold pt-1 py-4">{ausgabe.moderationNamen}</p>


                            </div>
                            <div className="sm:w-2/3 sm:columns-2 gap-6 pr-6">
                                <div className="font-roboto-condensed">{documentToReactComponents(ausgabe.lesendeBios.json)}</div>
                            </div>

                        </div>


                        <a href={ausgabe.link} className="text-blue-500 underline font-roboto" target="_blank" rel="noopener noreferrer">Watch the video</a>

                    </div>




                ))}
            </div>
        </>

    );
};


{/* <div className="mt-4">
                            
{ausgabe.fotosAusgabeCollection.items.map((foto, index) => (
    <img key={index} src={foto.url} alt={`Foto ${index + 1}`} className="w-full h-auto mb-2" />
))}
</div> */}