// Import React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import styles
import './frontend/main/styles/index.css';

// Import do código
import App from './frontend/App';

// Import da função de serviceWorker para que o app possa ser instalado como PWA
import { registerServiceWorker } from './frontend/serviceWorker';

// Chamada para funcionamento de PWA
registerServiceWorker();

ReactDOM.render(
  //<React.StrictMode>
	<Router>
		<App />
	</Router>,
  //</React.StrictMode>,
	document.getElementById('root')
);

