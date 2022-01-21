import React, { useState } from "react";
import { IState as Props} from "../App"; 

interface IProps {
    albums: Props["albums"]
    setAlbums: React.Dispatch<React.SetStateAction<Props["albums"]>>
    // // get this type by hovering over setAlbums in App.tsx, then simplify long list to above syntax <Props["albums"]>
    // setAlbums: React.Dispatch<React.SetStateAction<{
    //     title: string;
    //     artist: string;
    //     imgUrl: string;
    //     year: number;
    //     note?: string | undefined;
    // }[]>>
}

// use IProps defined in interface above. destructure props passing in for handleClick
const AddToList: React.FC<IProps> = ({albums, setAlbums}) => {

    const [dataFromInput, setDataFromInput] = useState(
        {
            title: "",
            artist: "",
            imgUrl: "",
            year: "",
            note: ""
        }
    ) 

    // get event type from writing it inline (see commented out onChange in album title input) and hovering over it. get | HTMLTextAreaElement by hovering over {handleChange} in note input (red underline error). specify that you are returning nothing (void)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setDataFromInput(
            {
                ...dataFromInput,
                // name maps to what you are changing (title, artist, etc.)
                [event.target.name]: event.target.value
            }
        )
    }

    const handleClick = (): void => {
        if (
            !dataFromInput.title || 
            !dataFromInput.artist || 
            !dataFromInput.imgUrl || 
            !dataFromInput.year
        ) { return }

        setAlbums([
            ...albums,
            {
                title: dataFromInput.title,
                artist: dataFromInput.artist,
                imgUrl: dataFromInput.imgUrl,
                year: parseInt(dataFromInput.year), // input comes in as string
                note: dataFromInput.note
            }
        ])

        setDataFromInput(
            {
                title: "",
                artist: "",
                imgUrl: "",
                year: "",
                note: ""
            }
        ) 
    }

    

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Album title"
                className="AddToList-input"
                value={dataFromInput.title} // 2-way binding
                onChange={handleChange}
                // onChange={(event) => {}}
                name="title" // tell it what part of state this input element changes
            />

            <input
                type="text"
                placeholder="Artist name"
                className="AddToList-input"
                value={dataFromInput.artist}
                onChange={handleChange}
                name="artist"
            />

            <input
                type="text"
                placeholder="Cover image url"
                className="AddToList-input"
                value={dataFromInput.imgUrl}
                onChange={handleChange}
                name="imgUrl"
            />

            <input
                type="text"
                placeholder="Release Year"
                className="AddToList-input"
                value={dataFromInput.year}
                onChange={handleChange}
                name="year"
            />

            <textarea
                placeholder="Notes"
                className="AddToList-input"
                value={dataFromInput.note}
                onChange={handleChange}
                name="note"
            />

            <button
                className="AddToList-btn"
                onClick={handleClick}
            >
                Add to list
            </button>
        </div>
    )
}

export default AddToList;