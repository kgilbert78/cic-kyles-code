import React, {useState} from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'

export interface IState { // export to pass down to Props in child List component
    albums: {
        title: string,
        artist: string,
        imgUrl: string,
        year: number,
        note?: string // optional field denoted with ?
    }[] // brackets at end to define that it will be an array of these objects
}

function App() {
                            // brackets for subset or due to array of album objects?
    const [albums, setAlbums] = useState<IState["albums"]>([
        {
            title: "Ghost Repeater",
            artist: "Jeffrey Foucault",
            imgUrl: "https://f4.bcbits.com/img/a0181787027_10.jpg",
            year: 2006,
            note: "The first album I heard by him."
        },
        {
            title: "Long Day in the Milky Way",
            artist: "Kris Delmhorst",
            imgUrl: "https://m.media-amazon.com/images/I/81OgKKrySsL._SX522_.jpg",
            year: 2020,
            note: "Love the title of this one!"
        },
        {
            title: "Real Midnight",
            artist: "Birds of Chicago",
            imgUrl: "https://m.media-amazon.com/images/I/81lsVpe4pwL._SL1400_.jpg",
            year: 2016
        },
        {
            title: "Dryland",
            artist: "Chris Pureka",
            imgUrl: "https://f4.bcbits.com/img/a2882023608_10.jpg",
            year: 2006,
            note: "Compass Rose is my favorite song by her."
        },
        {
            title: "Monovision",
            artist: "Ray LaMontagne",
            imgUrl: "https://m.media-amazon.com/images/I/81ztAUj5kSL._SL1500_.jpg",
            year: 2020
        }
    ])

    return (
        <div className="App">
            <h1>Some albums in my collection</h1>
            <p>
                Project links:
                &nbsp;
                <a href="https://www.youtube.com/watch?v=jrKcJxF0lAU">YouTube Instructional Video</a>
                &nbsp; | &nbsp;
                 <a href="https://github.com/harblaith7/React-With-TypeScript-Crash-Course">Code from video</a>
            </p>
            
            <List albums={albums}/>
            <AddToList albums={albums} setAlbums={setAlbums}/>
        </div>
    );
}

export default App;
