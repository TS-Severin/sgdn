'use client';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const CarouselComponent = ({ images }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 3,
            partialVisibilityGutter: 30,
        },
        tablet: {
            breakpoint: { max: 1200, min: 464 },
            items: 2,
            partialVisibilityGutter: 100,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            partialVisibilityGutter: 20,
        },
    };

    return (
        <div className="container mx-auto w-full overflow-hidden">
            {isClient && (
                <Carousel
                    responsive={responsive}
                    ssr
                    minimumTouchDrag={80}
                    slidesToSlide={1}
                    infinite={true}
                    partialVisible={typeof window !== 'undefined' && window.innerWidth < 600 ? false : true}
                    centerMode={false}
                    containerClass="carousel-container"
                    itemClass="carousel-image"
                    rewind={true}
                >
                    {images.map((image, index) => (
                        <div key={index} className="flex justify-center items-center w-full">
                            <Image
                                src={image.url}
                                alt={`Lesungsfoto ${index + 1}`}
                                width={400}
                                height={300}
                                priority={true}
                                className="object-contain w-auto pl-1"
                            />
                        </div>
                    ))}
                </Carousel>
            )}
        </div>
    );
};

export default CarouselComponent;


