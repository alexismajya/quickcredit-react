import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/login.page';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route path='/'>
						<p> Quick credit home page here </p>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
