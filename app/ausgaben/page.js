
import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";
import CarouselComponent from "../../components/CarouselComponent";
import { getAllAusgaben } from "@/lib/api";
import Link from "next/link";

export default async function Ausgabe() {
    const { isEnabled } = draftMode();
    const ausgaben = await getAllAusgaben(isEnabled);
    console.log("ausgaben: ", ausgaben);




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

                        <div className="flex flex-col sm:flex-row-reverse gap-6">

                            <div className="sm:w-1/3 font-roboto py-1">
                                <h1 className="text-pink text-3xl uppercase font-bold pb-1">{ausgabe.ausgabeNummer}</h1>
                                <h1 className="text-pink text-3xl uppercase font-bold py-1">{ausgabe.datumZeit}</h1>

                                <h2 className="text-3xl font-bold pt-1 pb-4">{documentToReactComponents(ausgabe.lesendeNamen.json)}</h2>


                                <h4 className="text-pink uppercase font-bold py-1">
                                    {ausgabe.ortTitel}
                                </h4>

                                <div className="font-bold py-1">{documentToReactComponents(ausgabe.ortDetails.json)}</div>




                                <h4 className="text-pink uppercase font-bold py-1">

                                    {ausgabe.moderation}</h4>
                                <p className="font-bold pt-1 py-4">{ausgabe.moderationNamen}</p>


                            </div>

                            <div className="sm:w-1/3 font-roboto-condensed">{documentToReactComponents(ausgabe.lesendeBios.json)}</div>

                            <div className="sm:w-1/3 font-roboto-condensed">{documentToReactComponents(ausgabe.lesendeBios2.json)}</div>


                        </div>


                        <div href={documentToReactComponents(ausgabe.link.json)} className="text-blue-500 sm:text-xl underline font-roboto pt-4" target="_blank" rel="noopener noreferrer">{documentToReactComponents(ausgabe.link.json)}</div>

                    </div>




                ))}
            </div>
        </>

    );
};

