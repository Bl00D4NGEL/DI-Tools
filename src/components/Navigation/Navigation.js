import RouteConfig from "../../RouteConfig";
import React from "react";
import {NavLink} from "react-router-dom";

import './navigation.scss';
import icon from '../../assets/img/dmg-inc-icon-light.png';

export default function Navigation() {
    const generateNavigationLinks = () => {
        return <ul className="menu-active">
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
        <div id="di-logo">
            <a target="_blank" href="https://di.community/"><img src={icon} alt="Damage Incorporated"/></a>
        </div>
        <a onClick={toggleNavigation} className="toggle-nav" href="#">&#9776;</a>
    </nav>
}
