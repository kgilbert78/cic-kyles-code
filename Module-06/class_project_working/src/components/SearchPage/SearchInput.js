import "./SearchInput.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchInput = (props) => {
    return (
        <div className="SearchInput">
            {/* name of form will indicate the key on the object that gets created when storing the input. onChangeHandler not necessary because we can grab the data out of the html form and use that. form tag with onSubmit is in the parent div in the SearchPage */}
            <input className="SearchInput__Input" name={props.name} />
            {/* not doing input of type submit is we need to put the icon in the button and input tags are self closing */}
            <button className="SearchInput__Button" type="submit">
                <Icon className="SearchInput__Icon" icon={faSearch} />
            </button>
        </div>
    )
}