import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Customers = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3" style={{paddingLeft: 0}}>
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <div style={{textAlign: "center"}}>
                            <h3 style={{textDecoration: "underline", fontWeight: 700}}>Customers</h3>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>(123) 456-7890</td>
                                    <td>123 Main St. Apt. 4 Syracuse, NY 13202</td>
                                    <td>✏️&nbsp;&nbsp;&nbsp;🗑</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>(123) 456-7890</td>
                                    <td>123 Main St. Apt. 4 Syracuse, NY 13202</td>
                                    <td>✏️&nbsp;&nbsp;&nbsp;🗑</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{textAlign: "center"}}>
                            <h4 style={{textDecoration: "underline"}}>Add a Customer</h4>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label for="firstName" className="form-label">First Name:</label>
                                        <input type="text" className="form-control" id="firstName" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label for="address1" className="form-label">Address 1:</label>
                                        <input type="text" className="form-control" id="address1" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label for="lastName" className="form-label">Last Name:</label>
                                        <input type="text" className="form-control" id="lastName" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label for="address2" className="form-label">Address 2:</label>
                                        <input type="text" className="form-control" id="address2" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="phoneNumber" className="form-label">Phone Number:</label>
                                        <input type="text" className="form-control" id="phoneNumber" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-3">
                                        <label for="city" className="form-label">State:</label>
                                        <input type="text" className="form-control" id="city" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="mb-3">
                                        <label for="state" className="form-label">State:</label>
                                        <select className="form-select">
                                            {/* 
                                            couldn't get the word "select" to show up gray here:
                                            <option className="muted" style={{color: "#c6c6c6"}}value="" disabled selected>select</option>
                                            */}
                                            <option className="muted" style={{color: "#c6c6c6"}}value="" disabled selected></option>
                                            <option>AL</option>
                                            <option>AK</option>
                                            <option>AZ</option>
                                            <option>AR</option>
                                            <option>CA</option>
                                            <option>CO</option>
                                            <option>CT</option>
                                            <option>DE</option>
                                            <option>FL</option>
                                            <option>GA</option>
                                            <option>HI</option>
                                            <option>ID</option>
                                            <option>IL</option>
                                            <option>IN</option>
                                            <option>IA</option>
                                            <option>KS</option>
                                            <option>KY</option>
                                            <option>LA</option>
                                            <option>ME</option>
                                            <option>MD</option>
                                            <option>MA</option>
                                            <option>MI</option>
                                            <option>MN</option>
                                            <option>MS</option>
                                            <option>MO</option>
                                            <option>MT</option>
                                            <option>NE</option>
                                            <option>NV</option>
                                            <option>NH</option>
                                            <option>NJ</option>
                                            <option>NM</option>
                                            <option>NY</option>
                                            <option>NC</option>
                                            <option>ND</option>
                                            <option>OH</option>
                                            <option>OK</option>
                                            <option>OR</option>
                                            <option>PA</option>
                                            <option>RI</option>
                                            <option>SC</option>
                                            <option>SD</option>
                                            <option>TN</option>
                                            <option>TX</option>
                                            <option>UT</option>
                                            <option>VT</option>
                                            <option>VA</option>
                                            <option>WA</option>
                                            <option>WV</option>
                                            <option>WI</option>
                                            <option>WY</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10"></div>
                                <div className="col-2">
                                    <div className="mb-3">
                                        <label for="zipCode" className="form-label">Zip Code:</label>
                                        <input type="text" className="form-control" id="zipCode" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
								<div className="col text-center">
									<button type="submit" class="btn btn-primary">
										Add Customer
									</button>
								</div>
							</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;