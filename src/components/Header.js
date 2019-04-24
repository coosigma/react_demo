import React from "react";

export const Header = props => {
	return (
		<nav className='navbar navbar-expand-sm bg-light'>
			<div className='container'>
				<div className='navbar-header'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link' href=''>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href=''>
								User
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
