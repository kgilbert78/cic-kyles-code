export const DemoBestsellerList = (props) => {
    return (
        <main className="mainContent">
            <div className="d-flex flex-row" id="top">
                <div id="bestsellerLists" className="topMargin">
                    <h3>Bestseller List goes here</h3>
                    <p>Functions set up for unstored Reading List</p>

                    <div className="categoryDiv mx-2 my-4 border">
                        {props.categories.map((category) => {
                            let categoryID = category.list_id;
                            let categoryName = category.display_name;
                            let categoryCode = category.list_name_encoded;
                            return (
                                <div key={categoryID} className="thumbnailImageDiv col-3">
                                    <a id={categoryName}><h2 className="my-4">{categoryName}</h2></a>
                                </div>
                            );
                        })}
                    </div>;

                </div>
            </div>
        </main>

    );
};