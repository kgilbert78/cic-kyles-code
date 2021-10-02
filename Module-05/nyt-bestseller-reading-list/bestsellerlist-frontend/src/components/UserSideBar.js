export const UserSideBar = (props) => {
    return (
        <div className="sidebar">
            <h4>Category Links & Database Reading List go here</h4>
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
                    <li>Database Reading List goes here</li>
                </ul>
                <h3 style={{ fontSize: '1.25rem' }}>Books I Have Read</h3>
                <ul id="booksIHaveRead">
                <li>Database books-read go here</li>
                </ul>
            </div>
            
        </div>
    );
};