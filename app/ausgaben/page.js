
import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";
import CarouselComponent from "../../components/CarouselComponent";
import { getAllAusgaben } from "@/lib/api";
import { FaArrowRight } from "react-icons/fa";

const options = {
    renderNode: {
        'hyperlink': (node, children) => {
            return (
                <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        },
    },
};

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

                        <div className="flex flex-col sm:gap-6 sm:flex-row-reverse ">

                            <div className="sm:w-1/3 font-roboto py-1">
                                <h2 className="text-pink text-3xl uppercase font-bold font-roboto-condensed">{ausgabe.ausgabeNummer}</h2>
                                <h2 className="text-pink text-3xl uppercase font-bold font-roboto-condensed">{ausgabe.datumZeit}</h2>

                                <h2 className="text-3xl font-bold font-roboto-condensed pb-4">{documentToReactComponents(ausgabe.lesendeNamen.json, options)}</h2>


                                <h4 className="text-pink uppercase font-bold py-1">
                                    {ausgabe.ortTitel}
                                </h4>

                                <div className="font-bold py-1">{documentToReactComponents(ausgabe.ortDetails.json, options)}</div>




                                <h4 className="text-pink uppercase font-bold py-1">

                                    {ausgabe.moderation}</h4>
                                <p className="font-bold pt-1 py-4">{ausgabe.moderationNamen}</p>


                            </div>

                            <div className="sm:w-1/3 font-roboto-condensed">{documentToReactComponents(ausgabe.lesendeBios.json, options)}</div>

                            <div className="sm:w-1/3 font-roboto-condensed">{documentToReactComponents(ausgabe.lesendeBios2.json, options)}</div>


                        </div>

                        <div className="flex pt-4 sm:text-xl">
                            <FaArrowRight className="text-black mr-1 relative top-1" />
                            <div href={documentToReactComponents(ausgabe.link.json)} className="text-blue-500 sm:text-bold underline font-roboto flex" target="_blank" rel="noopener noreferrer">{documentToReactComponents(ausgabe.link.json)}</div>
                        </div>


                    </div>




                ))}
            </div>
        </>

    );
};

