import './App.scss';
import SideBar from './SideBar.js';
import Main from './Main.js';
import Almoco from './almoco.js';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

function App({}) {
	const [toggled, setToggled] = useState(false);

	const handleToggleSidebar = (value) => {
		setToggled(value);
	};

	return (
		<div className={`app ${toggled ? 'toggled' : ''}`}>

			<SideBar className= "side-menu"
				toggled = {toggled}
				handleToggleSidebar={handleToggleSidebar}
			/>
			<Switch>
				<Route path="/almoco">
					<Almoco 
						handleToggleSidebar={handleToggleSidebar}
					/>
				</Route>

				<Route exact path="/">
					<Main
						handleToggleSidebar={handleToggleSidebar}
					/>
				</Route>
			</Switch>
				
		</div>
	);
}

export default App;