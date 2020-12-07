import './App.scss';
import SideBar from './SideBar.js';
import Main from './Main.js';
import React, { useState } from 'react';

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

			<Main
				handleToggleSidebar={handleToggleSidebar}
			/>
				
		</div>
	);
}

export default App;