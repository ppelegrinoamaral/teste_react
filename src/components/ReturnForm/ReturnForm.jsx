import React, { Component } from 'react';

import './estilo.css';

class ReturnForm extends Component {

    render() {
        return(
            <section>
                <form className="return-form">
                    <div className="return-form_tittle">
                        <p>Vamos ajudar seu paciente a lembrar do dia do retorno enviando um lembrete.</p>
                    </div>
                    <div className="return-form_datas">
                        <div className="return-form_datas_email">
                            <label className="return-form_datas_label" htmlFor="email">E-mail do paciente</label>
                            <input className="return-form_datas_input" type="email" id="email"/>
                        </div>
                        <div className="return-form_datas_date">
                            <label className="return-form_datas_label" htmlFor="date">Data de retorno</label>
                            <input className="return-form_datas_input" type="date" id="date" placeholder="E-mail"/>

                        </div>
                    </div>
                    <div>
                        <label htmlFor="counter">Lembrar</label>
                        <input type="number" id="counter"/>
                        <p>dias antes da data marcada</p>
                    </div>
                </form>
            </section>
        )
    }
}

export default ReturnForm