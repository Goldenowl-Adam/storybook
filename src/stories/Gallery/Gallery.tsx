import { useState } from 'react';
import './gallery.scss';

interface GalleryProps {
    images: { id: number; src: string }[];
}

export const Gallery = ({ images }: GalleryProps) => {
    const [isOpenGallery, setIsOpenGallery] = useState(false);
    const [indexSelectedImage, setIndexSelectedImage] = useState(1);
    return (
        <div className="container-gallery">
            <div className="wrapper">
                {images.map(({ id, src }) => (
                    <div
                        key={id}
                        className="wrapper__image"
                        onClick={() => {
                            setIsOpenGallery(true);
                            setIndexSelectedImage(id);
                        }}
                    >
                        <img
                            className="wrapper__image--item image"
                            src={src}
                            alt={src}
                        />
                    </div>
                ))}
            </div>
            {isOpenGallery && <div className="bg-cover"></div>}

            {isOpenGallery && (
                <div className="gallery">
                    {indexSelectedImage !== 1 && (
                        <span
                            className="gallery__control"
                            onClick={() => {
                                setIndexSelectedImage(indexSelectedImage - 1);
                            }}
                        >
                            <i className="gallery__control--left fas fa-chevron-left" />
                        </span>
                    )}

                    {indexSelectedImage !== images.length && (
                        <span
                            className="gallery__control"
                            onClick={() => {
                                setIndexSelectedImage(indexSelectedImage + 1);
                            }}
                        >
                            <i className="gallery__control--right fas fa-chevron-right" />
                        </span>
                    )}

                    <div className="gallery__image">
                        <img
                            className="image"
                            src={images[indexSelectedImage - 1].src}
                            alt={images[indexSelectedImage - 1].src}
                        />
                    </div>

                    <i
                        className="fas fa-times gallery__btn-close"
                        onClick={() => {
                            setIsOpenGallery(false);
                        }}
                    />
                </div>
            )}
        </div>
    );
};
