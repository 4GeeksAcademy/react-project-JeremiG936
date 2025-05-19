import React from "react";

const NavBar = () => {
	return (
		<div className="bg-dark d-flex justify-content-evenly">
			<p className="text-light pt-2">Start Bootstrap</p>
			<ul className="nav">
				<li className="nav-item">
					<a className="nav-link active text-light" aria-current="page" href="#">Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-secondary" href="#">About</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-secondary" href="#">Services</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-secondary" href="#">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;