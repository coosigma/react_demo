import React from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { User } from "./User";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class Root extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-xs-10 col-xs-offset-1'>
						<Header />
					</div>
				</div>
				<div className='row'>
					<div className='col-xs-10 col-xs-offset-1'>
						<Switch>
							<Route exact path={`${this.props.match.path}`} component={Home} />
							<Route path={`${this.props.match.path}user`} component={User} />
							<Route path={`${this.props.match.path}home`} component={Home} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}
