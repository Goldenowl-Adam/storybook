import { useState } from 'react';
import './gallery.scss';

interface GalleryProps {
    images: { id: number; src: string }[];
}

export const Gallery = ({ images }: GalleryProps) => {
   const [indexSelectedImage, setIndexSelectedImage] = useState<number>();

    return (
        <div className="container-gallery">
            <div className="wrapper">
                {images.map(({ id, src }, index) => (
                    <div
                        key={id}
                        className="wrapper__image"
                        onClick={() => {
                            setIndexSelectedImage(index);
                        }}
                    >
                        <img
                            className="wrapper__image--item image"
                            src={src}
                            alt=""
                        />
                    </div>
                ))}
            </div>
            {indexSelectedImage !== undefined && (
                <>
                    <div className="bg-cover" />
                    <div className="gallery">
                        {indexSelectedImage !== 0 && (
                            <span
                                className="gallery__control"
                                onClick={() => {
                                    setIndexSelectedImage(
                                        indexSelectedImage - 1
                                    );
                                }}
                            >
                                <i className="gallery__control--left fas fa-chevron-left" />
                            </span>
                        )}

                        {indexSelectedImage !== images.length - 1 && (
                            <span
                                className="gallery__control"
                                onClick={() => {
                                    setIndexSelectedImage(
                                        indexSelectedImage + 1
                                    );
                                }}
                            >
                                <i className="gallery__control--right fas fa-chevron-right" />
                            </span>
                        )}

                        <div className="gallery__image">
                            <img
                                className="image"
                                src={images[indexSelectedImage].src}
                                alt=""
                            />
                        </div>

                        <i
                            className="fas fa-times gallery__btn-close"
                            onClick={() => {
                                setIndexSelectedImage(undefined);
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};
