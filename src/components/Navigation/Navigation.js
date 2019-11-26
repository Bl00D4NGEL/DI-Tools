import RouteConfig from "../../RouteConfig";
import React from "react";
import {NavLink} from "react-router-dom";

import './nav.scss';
import icon from '../../assets/img/dmg-inc-icon-light.png';

export default function Navigation() {
    const generateNavigationLinks = () => {
        return <ul>
            {
                RouteConfig.getAll().map((route) => {
                    return <li key={route.path}><NavLink onClick={() => document.getElementsByClassName('toggle-nav')[0].click()} to={route.path}>{route.name}</NavLink></li>
                })
            }
        </ul>
    };

    const toggleNavigation = (e) => {
        e.currentTarget.classList.toggle('menu-active');
        document.querySelector('.menu ul').classList.toggle('menu-active');
        e.preventDefault();
    };

    return <nav className="menu">
        {generateNavigationLinks()}
        <div id="di-logo"><img src={icon} alt="Damage Incorporated"/></div>
        <a onClick={toggleNavigation} className="toggle-nav" href="#">&#9776;</a>
    </nav>
    /*
    <div>
        <input onChange={toggleContent} type="checkbox" id="sidebar-toggle-input"/>
        <label className="sidebar-toggle" htmlFor="sidebar-toggle-input"/>
        <div className="sidebar">
            <div>
                <img alt="Damage Incorporated" src={icon}/>
            </div>
            {generateNavigationLinks()}
        </div>
    </div>
    */
}

/*
<nav class="menu">
	<ul class="active">
		<li class="current-item"><a href="#">Home</a></li>
		<li><a href="#">My Work</a></li>
		<li><a href="#">About Me</a></li>
		<li><a href="#">Get in Touch</a></li>
		<li><a href="#">Blog</a></li>
	</ul>

	<a class="toggle-nav" href="#">&#9776;</a>

	<form class="search-form">
		<input type="text">
		<button>Search</button>
	</form>
</nav>
 */
