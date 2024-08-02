import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

export default function LightboxComponent({ images, open, handleClose }) {


    return (
        <>


            <Lightbox
                open={open}
                close={handleClose}
                slides={images.map(image => ({ src: image.url }))}
            />
        </>
    );
}