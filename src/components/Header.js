import React from "react";
import { Link } from "react-router-dom";

export const Header = props => {
	return (
		<nav className='navbar navbar-expand-sm bg-light'>
			<div className='container'>
				<div className='navbar-header'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link to={"/home"} className={"nav-link"}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to={"/user/10"} className={"nav-link"}>
								User
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
