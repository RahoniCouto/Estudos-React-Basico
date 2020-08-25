import './App.css';
import React from 'react';

import MegaSena from './components/MegaSena/MegaSena'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmentos';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';

import ListaAlunos from './components/repeticao/ListaAlunos';
import TableProdutos from './components/repeticao/TableProdutos';

import ParOuImpar from './components/condicional/ParOuImpar';




export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React (Arrow)</h1>
            <div className="Cards">
                <Card titulo="#15-MegaSena" color="#f77f00">
                    <MegaSena qtd={6} />
                </Card>
                <Card titulo="#14-Contador" color="#c99789">
                    <Contador numeroInicial={10} />
                </Card>
                <Card titulo="#13-Componente Controlado (Input)" color="#ee4035">
                    <Input></Input>
                </Card>
                <Card titulo="#12-Comunicação Indireta" color="#008744">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#11-Comunicação Direta" color="#4279a3">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#8/9/10-Renderização Condicional" color="#ffc425">
                    <ParOuImpar numero={5}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Luiz' }}></UsuarioInfo>
                    <UsuarioInfo></UsuarioInfo>
                </Card>
                <Card titulo="#7-Repetição Desafio" color="#8874a3">
                    <TableProdutos></TableProdutos>
                </Card>
                <Card titulo="#7-Repetição" color="#00b159">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#6-Componente com Filho" color="#00aedb">
                    <Familia sobrenome="Couto">
                        <FamiliaMembro nome="Pedro"></FamiliaMembro>
                        <FamiliaMembro nome="João" ></FamiliaMembro>
                        <FamiliaMembro nome="Rahoni"></FamiliaMembro>
                    </Familia>
                </Card>
                <Card titulo="#4/5-eu primeiro card" color="#ee4035">
                    <Aleatorio min={0} max={100} />
                </Card>
                <Card titulo="#3-Fragmento" color="#f37736">
                    <Fragmento></Fragmento>
                </Card>
                <Card titulo="#2-Com Parametro" color="#fdf498">
                    <ComParametro titulo="Situação do aluno" aluno="Pedro" nota={9.3} />
                </Card>
                <Card titulo="#1-Primeiro" color="#7bc043">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}
