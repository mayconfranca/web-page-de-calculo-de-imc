import React from 'react';
import './estilo.css';

class Apresentacao extends React.Component {
    
    render() {
        return(
            <section className='secaoUm'>
                <h1>IMC</h1>
                <p className='pgo'>
                    O IMC é o Índice de Massa Corporal, 
                    uma medida que indica se o peso de uma pessoa está adequado para a sua altura. 
                    É calculado dividindo-se o peso (em kg) pela altura ao quadrado (em m), 
                    e o resultado é dado em kg/m 2. 
                    Quanto maior o IMC, maior o peso em relação à altura; quanto menor, menor o peso em relação a mesma. 
                    O IMC pode ajudar a identificar problemas de obesidade ou desnutrição, 
                    e também o risco de desenvolver doenças crônicas, 
                    mas ele não leva em conta os outros fatores que podem influenciar no peso e saúde das pessoas, 
                    como a idade, o sexo e a etnia. Por isso, 
                    deve ser usado com cautela e complementado com outros métodos de avaliação. 
                    Clique no botão abaixo para acessar a calculadora de IMC.
                </p>
                <div className='alinhamento'><button type='button' className='botaoUm' onClick={this.props.funcaoAcessar}>Acessar</button></div>
            </section>
        );
    }
}

export default Apresentacao;