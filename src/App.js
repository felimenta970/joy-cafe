// Import React e rotas
import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import componente da barra lateral
import SideBar from './components/SideBar.js';

// Import de páginas

//import Main from './Main.js';
//import Sobre from './pages/sobre/sobre.js';
//import Servicos from './pages/sobre/servicos.js';

// import Cafe from './pages/bebidas/cafe.js';
// import Capuccino from './pages/bebidas/capuccino.js';
// import Cha from './pages/bebidas/cha.js';
// import Leite from './pages/bebidas/leite.js';
// import Refri from './pages/bebidas/refriAgua.js';
// import Suco from './pages/bebidas/suco.js';

//import Natural from './pages/lanches/natural.js';
//import Quente from './pages/lanches/quente.js';

// import PaoQueijo from './pages/salgados/pao_queijo.js';
// import Salgado from './pages/salgados/salgado.js';

// import Doces from './pages/doces.js';
// import Omelete from './pages/panq_omel.js';
// import Salada from './pages/salada.js';

// Página de 
import Loading from './components/Loading.js';

// Import estilos
import './styles/App.scss';

// Componentes importados em modo lazy

const Main = lazy(() => import('./Main.js'));
const Sobre = lazy(() => import('./pages/sobre/sobre.js'));
const Servicos = lazy(() => import('./pages/sobre/servicos.js'));

const Almoco = lazy(() => import('./pages/almoco.js'));

const Cafe = lazy(() => import('./pages/bebidas/cafe.js'));
const Capuccino = lazy(() => import('./pages/bebidas/capuccino.js'));
const Cha = lazy(() => import('./pages/bebidas/cha.js'));
const Leite = lazy(() => import('./pages/bebidas/leite.js'));
const Refri = lazy(() => import('./pages/bebidas/refriAgua.js'));
const Suco = lazy(() => import('./pages/bebidas/suco.js'));

const Natural = lazy(() => import('./pages/lanches/natural.js'));
const Quente = lazy(() => import('./pages/lanches/quente.js'));

const PaoQueijo = lazy(() => import('./pages/salgados/pao_queijo.js'));
const Salgado = lazy(() => import('./pages/salgados/salgado.js'));

const Doces = lazy(() => import('./pages/doces.js'));
const Omelete = lazy(() => import('./pages/panq_omel.js'));
const Salada = lazy(() => import('./pages/salada.js'));


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
						<Suspense fallback={<Loading /> }>
							<Sobre
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					{/* Serviços */}
					<Route exact path="/servicos">
						<Suspense fallback={<Loading /> }>
							<Servicos
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					{/* Refri e Água */}
					<Route exact path="/refriAgua">
						<Suspense fallback={<Loading /> }>
							<Refri 
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>
					
					<Route exact path="/cafe">
						<Suspense fallback={<Loading /> }>
							<Cafe 
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					<Route exact path="/capuccinos">
						<Suspense fallback={<Loading /> }>
							<Capuccino 
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					<Route exact path="/cha">
						<Suspense fallback={<Loading /> }>
							<Cha
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					<Route exact path="/leites">
						<Suspense fallback={<Loading /> }>
							<Leite
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					<Route exact path="/sucos">
						<Suspense fallback={<Loading /> }>
							<Suco
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					<Route exact path="/naturais">
						<Suspense fallback={<Loading /> }>
							<Natural
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					<Route exact path="/lanches_quentes">
						<Suspense fallback={<Loading /> }>
							<Quente 
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					<Route exact path="/pao_queijo">
						<Suspense fallback={<Loading /> }>
							<PaoQueijo 
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					<Route exact path="/salgados">
						<Suspense fallback={<Loading /> }>
							<Salgado
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					<Route exact path="/doces">
						<Suspense fallback={<Loading /> }>
							<Doces
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					<Route exact path="/panq_omel">
						<Suspense fallback={<Loading /> }>
							<Omelete
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					<Route exact path="/saladas">
						<Suspense fallback={<Loading /> }>
							<Salada
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>
					

					{/* Página inicial ("/" ou "joy-cafe") */}
					<Route exact path="/">
						<Suspense fallback={<Loading /> }>
							<Main
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

					<Route exact path="/joy-cafe">
						<Suspense fallback={<Loading /> }>
							<Main
								handleToggleSidebar={handleToggleSidebar}
							/>
						</Suspense>
					</Route>

				</Switch>
			</Router>
				
		</div>
	);
}

export default App;