import "./ProductMediaViewer.scss";
import { useState } from 'react';
import { ImageMedia } from '../ImageMedia/ImageMedia';

export const ProductMediaViewer = (props) => {

    // props needed: props.media

    // show first image (index zero) to start with
    const [mediaIndex, setMediaIndex] = useState(0);

    return (
        <div className="ProductMediaViewer">
            <div className="ProductMediaViewer__MediaWrapper mb-3">
                {/* replace img with ImageMedia so the component handles the image styling logic for you */}
                <ImageMedia
                    src={props.media[mediaIndex].src}
                    alt={props.media[mediaIndex].alt}
                />
                {/* flex for extra thumbnails past edge of featured image to wrap to next line */}
                <div className="d-flex flex-wrap">
                    {/* use the index passed as a parameter here, as parameter to setMediaIndex (from useState). Change the piece of state mediaIndex to show the correct source in the ImageMedia tag above at src={props.media[mediaIndex].src} */}
                {props.media.map((medium, index) => (
                    <div 
                        key={index} 
                        className="ProductMediaViewer__MediaThumbnail"
                        onClick= {() => (
                            setMediaIndex(index)
                        )}
                    >
                        {/* replace img with ImageMedia here too, to apply different logic for styles based on where rendered. avoid rewriting logic for every instance. Apply isThumbnail from ImageMedia.js if statement in className for <div> */}
                        <ImageMedia isThumbnail src={medium.src} alt={medium.alt} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}