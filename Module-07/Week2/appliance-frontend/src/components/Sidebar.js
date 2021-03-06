const Sidebar = () => {
    return (
        <div style={{height: "calc(100vh - 50px)", backgroundColor: "#c6c6c6"}}>
            <ul className="list-group" style={{padding: 15}}>
                <li className="list-group-item">Customers</li>
                <li className="list-group-item">Appliances</li>
                <li className="list-group-item">Service Orders</li>
                <li className="list-group-item">S.O. Assignments</li>
                <li className="list-group-item">Manage Users</li>
                <li className="list-group-item">Reports</li>
                <li className="list-group-item">Parts</li>
                <li className="list-group-item" onClick={() => {
                    delete localStorage.password;
                    delete localStorage.email;
                    window.location="/";
                }}
                >
                    Sign Out
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;