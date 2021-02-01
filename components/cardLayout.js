import React, { useMemo, useState } from "react";

import { Camera, ShoppingCart } from "react-feather";

function cardLayout() {
	const [state, setState] = useState({
		title: "",
	});
	const setCart = (id) => {
		if (id == "ikan1") {
			setState((prevState) => ({ ...prevState, title: "ikan bilis 1" }));
		} else {
			setState((prevState) => ({ ...prevState, title: "ikan bilis 2" }));
		}
	};
	return (
		<div
			className="container-fluid p-0 m-0  
      align-items-center  
      justify-content-center d-flex py-3">
			<div className="row w-100 p-0 w-0">
				<div className="col-lg-3 col-6 mb-2">
					<div className="card mx-auto" style={{ width: "100%" }}>
						<img className="card-img-top" src="/tomyam.jpg" alt="Card image" />
						<div className="text-center py-2">
							<h4 className="card-title">John Doe</h4>
							<div className="py-2">
								<span>Price:</span> <span className="card-text">RM 5</span>
							</div>
						</div>
						<div style={{ textAlign: "center", padding: "12px" }}>
							<button data-toggle="modal" onClick={(e) => setCart("ikan1")} data-target="#myModal" href="#" className="btn btn-primary">
								<div className="d-flex align-items-center justify-content-center">
									<i style={{ fontSize: "25px" }} className="fas fa-shopping-cart" aria-hidden="true"></i>
									<div>Order Now</div>
								</div>
							</button>
						</div>
					</div>
				</div>

				<div className="col-lg-3 col-6 mb-2">
					<div className="card mx-auto" style={{ width: "100%" }}>
						<img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar5.png" alt="Card image" />
						<div className="text-center py-2">
							<h4 className="card-title">John Doe</h4>
							<div className="py-2">
								<span>Price:</span> <span className="card-text">RM 5</span>
							</div>
						</div>
						<div style={{ textAlign: "center", padding: "12px" }}>
							<button data-toggle="modal" onClick={(e) => setCart("ikan1")} data-target="#myModal" href="#" className="btn btn-primary">
								<div className="d-flex align-items-center justify-content-center">
									<i style={{ fontSize: "25px" }} className="fas fa-shopping-cart" aria-hidden="true"></i>
									<div>Order Now</div>
								</div>
							</button>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-6 mb-2">
					<div className="card mx-auto" style={{ width: "100%" }}>
						<img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar5.png" alt="Card image" />
						<div className="text-center py-2">
							<h4 className="card-title">John Doe</h4>
							<div className="py-2">
								<span>Price:</span> <span className="card-text">RM 5</span>
							</div>
						</div>
						<div style={{ textAlign: "center", padding: "12px" }}>
							<button data-toggle="modal" onClick={(e) => setCart("ikan1")} data-target="#myModal" href="#" className="btn btn-primary">
								<div className="d-flex align-items-center justify-content-center">
									<i style={{ fontSize: "25px" }} className="fas fa-shopping-cart" aria-hidden="true"></i>
									<div>Order Now</div>
								</div>
							</button>
						</div>
					</div>
				</div>

				<div className="col-lg-3 col-6 mb-2">
					<div className="card mx-auto" style={{ width: "100%" }}>
						<img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar5.png" alt="Card image" />
						<div className="text-center py-2">
							<h4 className="card-title">John Doe</h4>
							<div className="py-2">
								<span>Price:</span> <span className="card-text">RM 5</span>
							</div>
						</div>
						<div style={{ textAlign: "center", padding: "12px" }}>
							<button data-toggle="modal" onClick={(e) => setCart("ikan1")} data-target="#myModal" href="#" className="btn btn-primary">
								<div className="d-flex align-items-center justify-content-center">
									<i style={{ fontSize: "25px" }} className="fas fa-shopping-cart" aria-hidden="true"></i>
									<div>Order Now</div>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="myModal" role="dialog">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">
								&times;
							</button>
						</div>
						<div className="modal-body">
							<span>Product Name:</span>
							<p>IKAN BILIS TOMYAM</p>
							<p>{state.title}</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default cardLayout;
