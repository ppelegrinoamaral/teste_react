import React, { Component } from 'react';

import './estilo.css';
import t from './images/t.svg';
import notification from './images/notification.svg';

class TopNavBar extends Component {

    render() {
        return (
            <section className="top-nav-bar_icons">
                <div className="top-nav-bar_icons_left">
                    <img className="top-nav-bar_icons_t" src={ t }/>
                </div>
                <div className="top-nav-bar_icons_right">
                    <img className="top-nav-bar_icons_notification" src={ notification }/>
                    <p className="top-nav-bar_icons_initials">PA</p>
                </div>
            </section>
        )
    }
}

export default TopNavBar