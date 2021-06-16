import "./SearchPageOption.scss";
export const SearchPageOption = (props) => {
    return (
        <div className="SearchPageOption d-flex col-6 col-md-3">
            <div className="SearchPageOption__Text d-none d-md-flex">
                {/* pass in text from filterBy or sortBy */}
                {props.text}
            </div>
            {/* each <option> has a value property so when user selects one, the value of the <select> input becomes whatever the value on that option was. if don't use props.value the value will stay on the element and you can't modify it to select default value, etc. Do this with onChange - function to handle how the value gets updated. Can't do this in a reusable way w/querySelector because you'd have to write a new one for each option. also you want to see changes instantly w/o submit button (unlike input where you don't want to see changes w/every letter you type) */}
            <select className="SearchPageOption__Select" value={props.value} onChange={(event) => {
                    props.onChange && props.onChange(event.target.value);
                    // pass down prop with same name as event handler to target. logical AND to only fire if props.onChange has been defined (isn't null). if this is truthy (user defined onChange prop), pass value of whatever select element is.
                }}
            >
                {/* loop through filterOptions & sortByOptions variables at top of SearchPage.js to create option tags for each one (or empty array in none) */}
                {(props.options || []).map((eachOption, index) => (
                    <option key={index} value={eachOption.value}>{eachOption.text}</option>
                    // need value and text because no spaces and camelCase in value names, use array of objects to solve this problem - text is what displays to user
                ))}
            </select>
        </div>
    )
}