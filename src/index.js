import './index.css';
import React from 'react';
import ReactDOM, { render } from 'react-dom';

import SideNavBar from './components/SideNavBar/SideNavBar';
import TopNavBar from './components/TopNavBar/TopNavBar';

ReactDOM.render(
    <React.StrictMode>
        <TopNavBar />
        <SideNavBar />
    </React.StrictMode>,
    document.getElementById('root')
)