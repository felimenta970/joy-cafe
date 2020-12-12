// Import React e rotas
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import componente da barra lateral
import SideBar from './SideBar.js';


// Import de páginas
import Main from './Main.js';
import Almoco from './pages/almoco.js';
import Refri from './pages/refriAgua.js';

// Import estilos
import './styles/App.scss';


function App({}) {
	// Ativado ou não
	const [toggled, setToggled] = useState(false);

	// Setter de ativação da barra ou não
	const handleToggleSidebar = (value) => {
		setToggled(value);
	};

	return (
		<div className={`app ${toggled ? 'toggled' : ''}`}>
			{/* Ativamos a barra lateral antes de tudo */}

			{/* Switch para que React saiba qual página renderizar */}
			<Router>

				<SideBar 
					className= "side-menu"
					toggled = {toggled}
					handleToggleSidebar={handleToggleSidebar}
				/>

				<Switch>
					{/* Almoço */}
					<Route exact path="/almoco">
						<Almoco 
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>


					<Route exact path="/refriAgua">
						<Refri 
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					{/* Página inicial ("/" ou "joy-cafe") */}
					<Route exact path="/">
						<Main
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					<Route exact path="/joy-cafe">
						<Main
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

				</Switch>
			</Router>
				
		</div>
	);
}

export default App;