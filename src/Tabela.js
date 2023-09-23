import React from 'react';
import './estilo.css';

class Tabela extends React.Component {
    
    render() {
        return(
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>IMC</th>
                            <th>CLASSIFICAÇÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='lu'>
                            <td className='tdbd'>Menor que 18,5</td>
                            <td className='tdbe'>Magreza</td>
                        </tr>
                        <tr className='ld'>
                            <td className='tdbd'>18,5 a 24,9</td>
                            <td className='tdbe'>Normal</td>
                        </tr>
                        <tr className='lt'>
                            <td className='tdbd'>25,0 a 29,9</td>
                            <td className='tdbe'>Sobrepeso</td>
                        </tr>
                        <tr className='lq'>
                            <td className='tdbd'>30,0 a 34,9</td>
                            <td className='tdbe'>Obesidade grau I</td>
                        </tr>                        
                        <tr className='lc'>
                            <td className='tdbd'>35,0 a 39,9</td>
                            <td className='tdbe'>Obesidade grau II</td>
                        </tr>
                        <tr className='ls'>
                            <td className='tdbd'>Maior que 40</td>
                            <td className='tdbe'>Obesidade grau III</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}

export default Tabela;