import React from 'react';
import './estilo.css';

class Calculadora extends React.Component {
    render() {
        return(
            <section className='secaoTres'>
                <form onSubmit={this.props.funcaoSubmeter}>
                    <div>Peso</div>
                    <div><input type='text' placeholder='75.1' onChange={this.props.funcaoDigitacaoUm} value={this.props.campoPeso}/></div>
                    <div>Altura</div>
                    <div><input type='text' placeholder='1.78' onChange={this.props.funcaoDigitacaoDois} value={this.props.campoAltura}/></div>
                    <div><button type='submit' className='botaoDois'>Calcular</button></div>
                </form>
                <p className='txo'>{this.props.imc}</p>
            </section>
        );
    }
}

export default Calculadora;