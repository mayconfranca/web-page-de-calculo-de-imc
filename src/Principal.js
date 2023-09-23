import React from 'react';

import Apresentacao from './Apresentacao';
import Calculadora from './Calculadora';
import Tabela from './Tabela';

import './estilo.css';

class Principal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {peso:'', altura:'', resultado:''};
    }
    
    funcaoAcesso = () => {
        document.querySelector('.secaoUm').style.display = 'none';
        document.querySelector('.secaoDois').style.display = 'block';
    }

    funcaoPeso = (pe) => {
        this.setState({peso:pe.target.value});
    }

    funcaoAltura = (alt) => {
        this.setState({altura:alt.target.value});
    }

    funcaoCalcular = (calc) => {

        calc.preventDefault();
        
        let p, a, r, texto, classes;
        p = this.state.peso;
        a = this.state.altura;
        r = p / (a * a);
        r = r.toFixed(2);
        this.setState({peso:'', altura:''});
        
        //Inserção da cor original nos elementos.
        classes = ['.lu', '.ld', '.lt', '.lq', '.lc', '.ls'];
        for(let i of classes) {
            document.querySelector(i).style.background = 'white';
            document.querySelector(i).style.color = 'indigo';
        }

        if(r == 0 || r == Infinity || isNaN(r)) {            
            //Verificação das entradas de dados.
            texto = 'Um campo ou mais está vazio e/ou não foi preenchido corretamente!';
            this.setState({resultado:texto});
            document.querySelector('.txo').style.color = 'red';
        } else {
            if(r < 18.5) {
                texto = 'O seu IMC é ' + r + '. Você está com o peso abaixo do ideal!';
                this.setState({resultado:texto});
                document.querySelector('.txo').style.color = 'red';
                document.querySelector('.lu').style.background = 'red';
                document.querySelector('.lu').style.color = 'white';
            }
            else if(r >= 18.5 && r <= 24.9) {
                texto = 'O seu IMC é ' + r + '. Parabéns! Você está com o peso ideal.';
                this.setState({resultado:texto});
                document.querySelector('.txo').style.color = 'green';
                document.querySelector('.ld').style.background = 'green';
                document.querySelector('.ld').style.color = 'white';                
            }
            else if(r >= 25 && r <= 29.9) {
                texto = 'O seu IMC é ' + r + '. Você está com o peso acima do ideal.';
                this.setState({resultado:texto});
                document.querySelector('.txo').style.color = 'orange';
                document.querySelector('.lt').style.background = 'orange';
                document.querySelector('.lt').style.color = 'white';
            }
            else if(r >= 30 && r <= 34.9) {
                texto = 'O seu IMC é ' + r + '. Você está com o peso muito acima do ideal!';
                this.setState({resultado:texto});
                document.querySelector('.txo').style.color = 'red';
                document.querySelector('.lq').style.background = 'red';
                document.querySelector('.lq').style.color = 'white';
            }
            else if(r >= 35 && r <= 39.9) {
                texto = 'O seu IMC é ' + r + '. Você está com o grau de obesidade elevado!';
                this.setState({resultado:texto});
                document.querySelector('.txo').style.color = 'red';
                document.querySelector('.lc').style.background = 'red';
                document.querySelector('.lc').style.color = 'white';
            }
            else if(r > 40) {
                texto = 'O seu IMC é ' + r + '. Você está com o grau de obesidade muito elevado!';
                this.setState({resultado:texto});
                document.querySelector('.txo').style.color = 'red';
                document.querySelector('.ls').style.background = 'red';
                document.querySelector('.ls').style.color = 'white';
            }
        }
    }

    render() {
        return(
            <section>
                <Apresentacao funcaoAcessar={this.funcaoAcesso}/>
                <section className='secaoDois'>
                    <Calculadora funcaoDigitacaoUm={this.funcaoPeso} funcaoDigitacaoDois={this.funcaoAltura}
                    funcaoSubmeter={this.funcaoCalcular} campoPeso={this.state.peso} campoAltura={this.state.altura}
                    imc={this.state.resultado}/>
                    <Tabela/>
                    <footer>Desenvolvido por Maycon França</footer>
                </section>                
            </section>            
        );
    }
}

export default Principal;