import "./ImageMedia.scss";

export const ImageMedia = (props) => {

    /* Props needed:
        props.src
        props.alt
        props.style
        props.isThumbnail (is at begining of variable name indicates boolean)
            use scss className ImageMedia--thumbnail
    */
    return (
        <div className={props.isThumbnail ? "ImageMedia--thumbnail" : "ImageMedia"}>
        {/* if props are thumbnails (truthy) apply class ImageMedia--thumbnail for styling, otherwise just use ImageMedia styling */}
            <img 
                className="ImageMedia__Image"
                src={props.src}
                alt={props.alt}
                style={props.style || {} }
            />
            {/* style={props.style || {} } is an option to pass styles in, but if no value is passed in, default to an empty object so it doesn't throw an exception. For example an empty string (falsy) when it's expecting an object */}
        </div>
    )
}
