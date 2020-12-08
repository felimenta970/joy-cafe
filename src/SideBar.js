import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import './App.scss';

import React from 'react';
import Almoco from './almoco.js';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// import { } from 'react-icons';
// import joyLogo from './assets/joyLogo.png'

const SideBar = ({toggled, handleToggleSidebar}) => {
	return (
		<Router>
		<ProSidebar
			breakPoint="md"
			className="side-menu"
			toggled={toggled}
			onToggle={handleToggleSidebar}
		>
			<SidebarHeader className = "headerSection">

				<Menu>
					<MenuItem>
						Home
						<Link to="/"/>
					</MenuItem>
					<SubMenu title="Sobre Nós">
						<MenuItem>Sobre Nós</MenuItem>
						<MenuItem>Serivços</MenuItem>
					</SubMenu>
				</Menu>
			</SidebarHeader>
			<SidebarContent> {
				<Menu iconShape="circle">
					<MenuItem>
						<div style = {{
							fontSize: 20,
							fontWeight: 'bold',
							textTransform: "uppercase",
						}}>
							Cardápio
						</div>
					</MenuItem>
					<MenuItem>
						Almoço
						<Link to="/almoco"/>
					</MenuItem>
					<SubMenu title="Bebidas">
						<MenuItem>Refrigerantes e Água</MenuItem>
						<MenuItem>Cafés</MenuItem>
						<MenuItem>Chás</MenuItem>
						<MenuItem>Leites</MenuItem>
						<MenuItem>Capuccinos</MenuItem>
						<MenuItem>Sucos</MenuItem>
					</SubMenu>

					<SubMenu title="Salgados">
						<MenuItem>Pães de Queijo</MenuItem>
						<MenuItem>Salgados</MenuItem>
					</SubMenu>

					<SubMenu title="Lanches">
						<MenuItem>Quentes</MenuItem>
						<MenuItem>Naturais</MenuItem>
					</SubMenu>

					<MenuItem>Panquecas e Omeletes</MenuItem>
					<MenuItem>Saladas</MenuItem>
					<MenuItem>Doces e Taças</MenuItem>
				</Menu>

			} </SidebarContent>

			<SidebarFooter className="footerSection">
				<div className = "footer">
					Copyright
				</div>
			</SidebarFooter>
			
		</ProSidebar>
		</Router>
	);
};

export default SideBar;