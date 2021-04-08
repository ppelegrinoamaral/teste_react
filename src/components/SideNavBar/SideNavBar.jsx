import React, { Component } from 'react';

import './estilo.css';
import dashboard from './images/dashboard.svg';
import circle from './images/circle.svg';
import headphone from './images/headphone.svg';
import assignment from './images/assignment.svg';
import notification from './images/notification.svg';

class SideNavBar extends Component {

    render() {
        return (
            <section className="side-nav-bar_icons">
                <div className="sidebar-separator">
                    <img className="side-nav-bar_icons_circle" src={ circle }/>
                </div>
                <div className="sidebar-separator">
                    <img className="side-nav-bar_icons_item" src={ dashboard } />
                </div>
                <div className="sidebar-separator">
                    <img className="side-nav-bar_icons_item" src={ headphone }/>
                </div>
                <div className="sidebar-separator">
                    <img className="side-nav-bar_icons_item" src={ assignment }/>
                </div>
                <div className="sidebar-separator">
                    <img className="side-nav-bar_icons_item" src={ notification }/>
                </div> 
            </section>
        )
    }
}

export default SideNavBar 
