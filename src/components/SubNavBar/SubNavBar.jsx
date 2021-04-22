import React, { Component } from 'react';

import './estilo.css';

class SubNavBar extends Component {

    render() {
        return (
            <section className="sub-nav-bar_itens">
                <div className="sub-nav-bar_itens_names">
                    <div className="sub-nav-bar_hover">
                        <p className="sub-nav-bar_tab">Anamnese</p>
                        <div className="sub-nav-bar_trace" />
                    </div>
                    <div className="sub-nav-bar_hover">
                        <p className="sub-nav-bar_tab">Exame Físico</p>
                        <div className="sub-nav-bar_trace" />
                    </div>
                    <div className="sub-nav-bar_hover">
                        <p className="sub-nav-bar_tab">Resultados</p>
                        <div className="sub-nav-bar_trace" />
                    </div>
                    <div className="sub-nav-bar_hover">
                        <p className="sub-nav-bar_tab">Retorno</p>
                        <div className="sub-nav-bar_trace" />
                    </div>
                </div>
                <div className="sub-nav-bar_items_space" />
            </section>
        )
    }
}

export default SubNavBar