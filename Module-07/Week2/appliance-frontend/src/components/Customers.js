import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Customers = () => {
	return (
		<div>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-3" style={{ paddingLeft: 0 }}>
						<Sidebar />
					</div>
					<div className="col-9">
						<div style={{ textAlign: "center" }}>
							<h3 style={{ textDecoration: "underline", fontWeight: 700 }}>
								Customers
							</h3>
						</div>
						<table
							className="table table-striped table-hover"
							style={{ border: "1px solid black" }}
						>
							<thead style={{ textAlign: "center" }}>
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
									<td>Testy</td>
									<td>McTesterson</td>
									<td>(123) 456-7890</td>
									<td>123 Main St, Syracuse, NY 123212</td>
									<td>✏️&nbsp;&nbsp;&nbsp;🗑</td>
								</tr>
								<tr>
									<td>Testy</td>
									<td>McTesterson</td>
									<td>(123) 456-7890</td>
									<td>123 Main St, Syracuse, NY 123212</td>
									<td>✏️&nbsp;&nbsp;&nbsp;🗑</td>
								</tr>
							</tbody>
						</table>
						<div style={{ textAlign: "center" }}>
							<h4 style={{ textDecoration: "underline" }}>Add a Customer</h4>
						</div>
						<form>
							<div className="row">
								<div className="col">
									<div className="mb-3">
										<label for="firstName" className="form-label">
											First Name:
										</label>
										<input
											type="text"
											className="form-control"
											id="firstName"
										/>
									</div>
								</div>
								<div className="col">
									<div className="mb-3">
										<label for="address1" className="form-label">
											Address 1:
										</label>
										<input type="text" className="form-control" id="address1" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="mb-3">
										<label for="lastName" className="form-label">
											Last Name
										</label>
										<input type="text" className="form-control" id="lastName" />
									</div>
								</div>
								<div className="col">
									<div className="mb-3">
										<label for="address2" className="form-label">
											Address 2:
										</label>
										<input type="text" className="form-control" id="address2" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div className="mb-3">
										<label for="phoneNumber" className="form-label">
											Phone Number:
										</label>
										<input
											type="text"
											className="form-control"
											id="phoneNumber"
										/>
									</div>
								</div>
								<div className="col-3">
									<div className="mb-3">
										<label for="city" className="form-label">
											City:
										</label>
										<input type="text" className="form-control" id="city" />
									</div>
								</div>
								<div className="col-3">
									<div className="mb-3">
										<label for="state" className="form-label">
											State:
										</label>
										<select className="form-select">
											<option>Alabama</option>
											<option>Alaska</option>
											<option>Arizona</option>
											<option>Arkansas</option>
											<option>California</option>
											<option>Colorado</option>
											<option>Connecticut</option>
											<option>Delaware</option>
											<option>Florida</option>
											<option>Georgia</option>
											<option>Hawaii</option>
											<option>Idaho</option>
											<option>Illinois</option>
											<option>Indiana</option>
											<option>Iowa</option>
											<option>Kansas</option>
											<option>Kentucky</option>
											<option>Louisiana</option>
											<option>Maine</option>
											<option>Maryland</option>
											<option>Massachusetts</option>
											<option>Michigan</option>
											<option>Minnesota</option>
											<option>Mississippi</option>
											<option>Missouri</option>
											<option>Montana</option>
											<option>Nebraska</option>
											<option>Nevada</option>
											<option>New Hampshire</option>
											<option>New Jersey</option>
											<option>New Mexico</option>
											<option>New York</option>
											<option>North Carolina</option>
											<option>North Dakota</option>
											<option>Ohio</option>
											<option>Oklahoma</option>
											<option>Oregon</option>
											<option>Pennsylvania</option>
											<option>Rhode Island</option>
											<option>South Carolina</option>
											<option>South Dakota</option>
											<option>Tennessee</option>
											<option>Texas</option>
											<option>Utah</option>
											<option>Vermont</option>
											<option>Virginia</option>
											<option>Washington</option>
											<option>West Virginia</option>
											<option>Wisconsin</option>
											<option>Wyoming</option>
										</select>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-9"></div>
								<div className="col">
									<div className="mb-3">
										<label for="zipCode" className="form-label">
											Zip Code:
										</label>
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