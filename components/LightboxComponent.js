import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


export default function LightboxComponent({ images, open, handleClose, currentImage }) {


    return (
        <>


            <Lightbox
                open={open}
                close={handleClose}
                slides={(() => {
                    const slidesArray = images.map(image => ({ src: image.url }));
                    const currentIndex = slidesArray.findIndex(slide => slide.src === currentImage);
                    return slidesArray.slice(currentIndex).concat(slidesArray.slice(0, currentIndex));

                })()}

            />

        </>
    );
}