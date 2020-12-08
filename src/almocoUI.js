import './App.scss';
import SideBar from './SideBar.js';
import Almoco from './almoco.js';
import React, { useState } from 'react';

function AlmocoUI({}) {
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

			<Almoco
				handleToggleSidebar={handleToggleSidebar}
			/>
				
		</div>
	);
}

export default AlmocoUI;