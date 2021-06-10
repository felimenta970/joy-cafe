// Import React e rotas
import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import componente da barra lateral
import SideBar from './main/components/SideBar.js';

// Import de páginas

// Página de 
import Loading from './main/components/Loading.js';

// Import estilos
import './main/styles/App.scss';

// Componentes importados em modo lazy

const Main = lazy(() => import('./Main.js'));
const Sobre = lazy(() => import('./main/pages/sobre/sobre.js'));
const Servicos = lazy(() => import('./main/pages/sobre/servicos.js'));

const Almoco = lazy(() => import('./main/pages/almoco.js'));

const Cafe = lazy(() => import('./main/pages/bebidas/cafe.js'));
const Capuccino = lazy(() => import('./main/pages/bebidas/capuccino.js'));
const Cha = lazy(() => import('./main/pages/bebidas/cha.js'));
const Leite = lazy(() => import('./main/pages/bebidas/leite.js'));
const Refri = lazy(() => import('./main/pages/bebidas/refriAgua.js'));
const Suco = lazy(() => import('./main/pages/bebidas/suco.js'));

const Natural = lazy(() => import('./main/pages/lanches/natural.js'));
const Quente = lazy(() => import('./main/pages/lanches/quente.js'));

const PaoQueijo = lazy(() => import('./main/pages/salgados/pao_queijo.js'));
const Salgado = lazy(() => import('./main/pages/salgados/salgado.js'));

const Doces = lazy(() => import('./main/pages/doces.js'));
const Omelete = lazy(() => import('./main/pages/panq_omel.js'));
const Salada = lazy(() => import('./main/pages/salada.js'));

const Login = lazy(() => import('./backoffice/Login'))


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
							<Login 
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