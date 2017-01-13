import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Main from './containers/Main';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import store from './store.js';
require('./css/app.scss');  

ReactDOM.render(<Provider store={store}>
	<Main />
</Provider>, document.getElementById('app'));