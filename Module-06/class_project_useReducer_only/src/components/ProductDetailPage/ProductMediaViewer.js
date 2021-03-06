import "./ProductMediaViewer.scss";
import { useState } from 'react';
import { ImageMedia } from '../ImageMedia/ImageMedia';

export const ProductMediaViewer = (props) => {

    const [mediaIndex, setMediaIndex] = useState(0);

    return (
        <div className="ProductMediaViewer">
            <div className="ProductMediaViewer__MediaWrapper mb-3">
                <ImageMedia
                    src={props.media[mediaIndex].src}
                    alt={props.media[mediaIndex].alt}
                />
                <div className="d-flex flex-wrap">
                    {props.media.map((medium, index) => (
                        <div
                            key={index}
                            className="ProductMediaViewer__MediaThumbnail"
                            onClick={() => (
                                setMediaIndex(index)
                            )}
                        >
                            <ImageMedia isThumbnail src={medium.src} alt={medium.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}