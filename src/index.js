import './index.css';
import React from 'react';
import ReactDOM, { render } from 'react-dom';

import SideNavBar from './components/SideNavBar/SideNavBar';
import TopNavBar from './components/TopNavBar/TopNavBar';
import SubNavBar from './components/SubNavBar/SubNavBar';
import ReturnForm from './components/ReturnForm/ReturnForm';

ReactDOM.render(
    <React.StrictMode>
        <TopNavBar />
        <SideNavBar />
        <SubNavBar />
        <ReturnForm />
    </React.StrictMode>,
    document.getElementById('root')
)