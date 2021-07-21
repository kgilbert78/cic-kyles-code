import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 mt-5 card">
                        <form className="card-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                        <Link to="/customers">
                            {/* To style an element with the inline style attribute, the value must be a JavaScript object. */}
                            <button type="submit" className="btn btn-primary" style={{width: "100%"}}>
                                Log In
                            </button>
                        </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;