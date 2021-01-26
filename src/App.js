// Import React e rotas
import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import componente da barra lateral
import SideBar from './components/SideBar.js';

// Import de páginas
import Main from './Main.js';
import Sobre from './pages/sobre/sobre.js';
import Servicos from './pages/sobre/servicos.js';



import Cafe from './pages/bebidas/cafe.js';
import Capuccino from './pages/bebidas/capuccino.js';
import Cha from './pages/bebidas/cha.js';
import Leite from './pages/bebidas/leite.js';
import Refri from './pages/bebidas/refriAgua.js';
import Suco from './pages/bebidas/suco.js';

import Natural from './pages/lanches/natural.js';
import Quente from './pages/lanches/quente.js';

import PaoQueijo from './pages/salgados/pao_queijo.js';
import Salgado from './pages/salgados/salgado.js';

import Doces from './pages/doces.js';
import Omelete from './pages/panq_omel.js';
import Salada from './pages/salada.js';

// Página de 
import Loading from './components/Loading.js';

// Import estilos
import './styles/App.scss';

// Componentes importados em modo lazy
const Almoco = lazy(() => import('./pages/almoco.js'));


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
			<Router basename="/joy-cafe">

				<SideBar 
					className= "side-menu"
					toggled = {toggled}
					handleToggleSidebar={handleToggleSidebar}
				/>

				<Switch>
					{/* Almoço */}
					<Route exact path="/almoco">
						<Suspense fallback={<Loading /> }>
							<Almoco 
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					{/* Sobre */}
					<Route exact path="/sobre">
						<Sobre
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					{/* Serviços */}
					<Route exact path="/servicos">
						<Servicos
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					{/* Refri e Água */}
					<Route exact path="/refriAgua">
						<Refri 
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>
					
					<Route exact path="/cafe">
						<Cafe 
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					<Route exact path="/capuccinos">
						<Capuccino 
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					<Route exact path="/cha">
						<Cha
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					<Route exact path="/leites">
						<Leite
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					<Route exact path="/sucos">
						<Suco
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					<Route exact path="/naturais">
						<Natural
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					<Route exact path="/lanches_quentes">
						<Quente 
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					<Route exact path="/pao_queijo">
						<PaoQueijo 
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					<Route exact path="/salgados">
						<Salgado
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					<Route exact path="/doces">
						<Doces
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					<Route exact path="/panq_omel">
						<Omelete
							handleToggleSidebar={handleToggleSidebar}
						/>
					</Route>

					<Route exact path="/saladas">
						<Salada
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