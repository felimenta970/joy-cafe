// Sidebar library
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';

// Styles
import './../styles/App.scss';
// import { } from 'react-icons';
 import joyLogo from './../assets/logo_joy_long.png'

// React e rotas
import React from 'react';
import { Link } from 'react-router-dom';

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
						<img src={joyLogo} className="logoSidebar" alt="Logo Joy Café e Bistrot"/>
						<MenuItem>
							Home
							<Link to="/"/>
						</MenuItem>
						<SubMenu title="Sobre Nós">
							<MenuItem>
								Sobre Nós
								<Link to="/sobre" />
							</MenuItem>
							<MenuItem>
								Serviços
								<Link to="/servicos" />
							</MenuItem>
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
							Almoço			
							<Link to="/almoco" />
						</MenuItem>

						{/* Sub menu bebidas */}
						<SubMenu title="Bebidas">

							<MenuItem>
								Refrigerantes e Água
								<Link to="/refriAgua" />
							</MenuItem>

							<MenuItem>
								Cafés
								<Link to="/cafe" />
							</MenuItem>

							<MenuItem>
								Chás
								<Link to="/cha" />
							</MenuItem>

							<MenuItem>
								Leites
								<Link to="/leites" />
							</MenuItem>

							<MenuItem>
								Capuccinos
								<Link to="/capuccinos" />
							</MenuItem>

							<MenuItem>
								Sucos
								<Link to="/sucos" />
							</MenuItem>

						</SubMenu>

						{/* Sub menu salgados */}
						<SubMenu title="Salgados">		

							<MenuItem>
								Pães de Queijo
								<Link to="/pao_queijo" />
							</MenuItem>

							<MenuItem>
								Salgados
								<Link to="/salgados" />
							</MenuItem>

						</SubMenu>

						{/* Sub menu lanches */}
						<SubMenu title="Lanches">

							<MenuItem>
								Quentes
								<Link to="/lanches_quentes" />
							</MenuItem>

							<MenuItem>
								Naturais
								<Link to ="/naturais" />
							</MenuItem>

						</SubMenu>

						
						<MenuItem>
							Panquecas e Omeletes
							<Link to="/panq_omel" />
						</MenuItem>

						<MenuItem>
							Saladas
							<Link to="/saladas" />
						</MenuItem>

						<MenuItem>
							Doces e Taças
							<Link to="/doces" />
						</MenuItem>
						
					</Menu>

				} </SidebarContent>

				{/* Footer da Sidebar */}
				<SidebarFooter className="footerSection">
					<div className = "footerSidebar">
						Felipe Pimenta @ 2021
					</div>
				</SidebarFooter>
				
			</ProSidebar>
	);
};

export default SideBar;