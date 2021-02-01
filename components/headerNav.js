function headerNav() {
	const sideNavigate = () => {
		document.getElementById("mySidenav").style.width = "250px";
	};

	const closeNav = () => {
		document.getElementById("mySidenav").style.width = "0px";
	};
	return (
		<nav className="navbar  navbar-expand-md bg-dark navbar-dark fixed-top justify-content-end">
			<button className="navbar-toggler" type="button" onClick={sideNavigate}>
				<span className="navbar-toggler-icon"></span>
			</button>

			<a className="navbar-left-img" href="#">
				<img src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
			</a>
			<a className="navbar-brand" href="#">
				Brand
			</a>

			<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link 1
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Cart
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About Us
						</a>
					</li>
				</ul>
			</div>

			<div id="mySidenav" className="sidenav">
				<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
					&times;
				</a>
				<a href="#">About</a>
				<a href="#">Services</a>
				<a href="#">Clients</a>
				<a href="#">Contact</a>
			</div>
		</nav>
	);
}

export default headerNav;
