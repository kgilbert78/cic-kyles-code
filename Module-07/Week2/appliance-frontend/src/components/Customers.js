import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Customers = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <h1>Customers page</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;