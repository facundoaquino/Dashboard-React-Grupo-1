import React from 'react';
import Link from './Link';
import {datos} from '../../helpers';
import './sidebar.css'
import logoAzvi from './../Main/assets/images/logoAzvi.png'

const SideBar = () => {
    return (
        <ul className="sidebar__container navbar-nav sidebar__background sidebar sidebar-dark accordion" id="accordionSidebar">

			<div className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					 

				<img className='sidebar__logo' src={logoAzvi} alt=""/>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</div>

			<hr className="sidebar-divider my-0" />

			<Link 
				classIcon="fas fa-fw fa-tachometer-alt"
				title="Dashboard"
				active="active"
				route="/"
			/>

			<hr className="sidebar-divider" />

			<div className="sidebar-heading">Actions</div>
			
			{/* Listado de links */}
			{
				datos.map((link) => (
					<Link 
						key={link.title} 
						classIcon={link.classIcon} 
						title={link.title}
						active={link.active}
						route={link.route}
					/>
				))
			}
				

			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
    );
}

export default SideBar;
