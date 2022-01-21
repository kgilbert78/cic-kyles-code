import React from "react";
import { IState as IProps} from "../App"; // replaces commented out redundant IProps below

// interface IProps {
//     albums: {
//         title: string,
//         artist: string,
//         imgUrl: string,
//         year: number,
//         note?: string 
//     }[]
// }

// const List = (props: IProps) => {
const List: React.FC<IProps> = ({albums}) => { // more specific way to do above, by defining type of element... FC = Functional Component (gives react more info... list is not just a function returning JSX, but a component)

    // define that you're returning - hover over renderList to get definition to use.
    const renderList = (): JSX.Element[] => {
        return albums.map((album) => {
            return (
                <li className='List'>
                    <div className="List-header">
                        <img className="List-img" src={album.imgUrl} />
                        <div>
                            <strong>{album.title}</strong>
                            <br />
                            ({album.artist})</div>
                    </div>
                    <p>Released in {album.year}</p>
                    <p className="List-note">{album.note}</p>
                </li>
            )
        })
    }

    return(
        <ul>
            {renderList()}
        </ul>
    )
}

export default List;