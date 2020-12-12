// Sidebar library
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';

// Styles
import './styles/App.scss';
// import { } from 'react-icons';
// import joyLogo from './assets/joyLogo.png'

// React e rotas
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// Componente da barra lateral
const SideBar = ({toggled, handleToggleSidebar}) => {
	return (
		// Rotas para lidarmos com troca de página
		// Inútil? Não funciona ainda

			{/* Inicializar a barra com algumas propriedades */},
			<ProSidebar
				breakPoint="md"
				className="side-menu"
				toggled={toggled}
				onToggle={handleToggleSidebar}
			>
				{/* Header */}
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

				{/* Conteúdo da barra lateral */}
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
							<Link to="/almoco">Almoço</Link>
						</MenuItem>

						{/* Sub menu bebidas */}
						<SubMenu title="Bebidas">

							<MenuItem>
								Refrigerantes e Água
								<Link to="/refriAgua" />
							</MenuItem>
							<MenuItem>Cafés</MenuItem>
							<MenuItem>Chás</MenuItem>
							<MenuItem>Leites</MenuItem>
							<MenuItem>Capuccinos</MenuItem>
							<MenuItem>Sucos</MenuItem>

						</SubMenu>

						{/* Sub menu salgados */}
						<SubMenu title="Salgados">		

							<MenuItem>Pães de Queijo</MenuItem>
							<MenuItem>Salgados</MenuItem>
						</SubMenu>

						{/* Sub menu lanches */}
						<SubMenu title="Lanches">

							<MenuItem>Quentes</MenuItem>
							<MenuItem>Naturais</MenuItem>
						</SubMenu>

						<MenuItem>Panquecas e Omeletes</MenuItem>
						<MenuItem>Saladas</MenuItem>
						<MenuItem>Doces e Taças</MenuItem>
					</Menu>

				} </SidebarContent>

				{/* Footer */}
				<SidebarFooter className="footerSection">
					<div className = "footer">
						Copyright
					</div>
				</SidebarFooter>
				
			</ProSidebar>
	);
};

export default SideBar;