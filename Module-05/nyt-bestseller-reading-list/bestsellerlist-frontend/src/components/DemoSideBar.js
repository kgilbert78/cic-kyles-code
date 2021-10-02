export const DemoSideBar = (props) => {
    
    return (
        <div className="sidebar">
            <div>
                <h3 className="topMargin" data-bs-toggle="collapse" href="#navLinks" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ fontSize: '1.25rem' }}>
                    Jump to a category &#x25BC;
                </h3>
                <div id="navLinks" className="collapse">
                    <p>Category Links un-collapse here</p>
                    
                </div>
            </div>

            <div id="readingList" className="mt-5">
                <h3 style={{ fontSize: '1.25rem' }}>My Reading List</h3>
                <ul id="booksToRead">
                    <li>Nothing to read yet! </li>
                    <li>Login to create a saved reading list...</li>
                    <li>or try it out here first! (Reading list clears when you leave the page.)</li>
                </ul>
                <h3 style={{ fontSize: '1.25rem' }}>Books I Have Read</h3>
                <ul id="booksIHaveRead">

                </ul>
            </div>
            
        </div>


    );
};