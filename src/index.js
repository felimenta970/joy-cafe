// Import React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Import styles
import './styles/index.css';

// Import do código
import App from './App';

// Import da função de serviceWorker para que o app possa ser instalado como PWA
import { registerServiceWorker } from './serviceWorker';

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

