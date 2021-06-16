import "./SearchPageOption.scss";
export const SearchPageOption = (props) => {
    return (
        <div className="SearchPageOption d-flex col-6 col-md-3">
            <div className="SearchPageOption__Text d-none d-md-flex">
                {props.text}
            </div>
            <select className="SearchPageOption__Select" value={props.value} onChange={(event) => {
                    props.onChange && props.onChange(event.target.value);
                }}
            >
                {(props.options || []).map((eachOption, index) => (
                    <option key={index} value={eachOption.value}>{eachOption.text}</option>
                ))}
            </select>
        </div>
    )
}