import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
    const logginButtonClicked = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const response = await fetch(`http://localhost:3001/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                email,
                password
            },
            //body: JSON.stringify({email, password})
        });
        const data = await response.json();
        console.log(data);
        if (data.error) {
            alert(data.error);
            // why else if here?
        } else if (data.success) {
            // stores info into the browser
            localStorage.email = email;
            localStorage.password = password;
            window.location = "/customers";

        }
    };
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 mt-5 card">
                        <form className="card-body" onSubmit={logginButtonClicked}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            {/* To style an element with the inline style attribute, the value must be a JavaScript object. */}
                            <button type="submit" className="btn btn-primary" style={{width: "100%"}}>
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;