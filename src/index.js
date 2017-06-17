import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//the Provider is wrapped around the root of my app component
// doesn't need to wrap other components.

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
