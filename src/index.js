// Import React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Import styles
import './styles/index.css';

// Import do código
import App from './App';


ReactDOM.render(
  //<React.StrictMode>
	<Router>
		<App />
	</Router>,
  //</React.StrictMode>,
	document.getElementById('root')
);

