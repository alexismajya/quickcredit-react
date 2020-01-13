import React from 'react';
import App from './App/App.js';
import store from './redux/store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../src/App/Assests/css/style.scss';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
