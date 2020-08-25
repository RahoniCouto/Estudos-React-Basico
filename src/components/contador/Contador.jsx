import './Contador.css';
import React, { Component } from 'react';
import Display from './Display';
import PassoForm from './PassoForm';
import Button from './Button';


class Contador extends Component{

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    };

    

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: +novoPasso.target.value,
        });
    }

    render() {
        return(
            <div className="Contator">
                <h2>Contador</h2>
                <Display numero={ this.state.numero } />
                <PassoForm
                    setId="passoInput" 
                    passo={ this.state.passo } 
                    setChange={this.setPasso}
                />
                <Button setInc={this.inc}  setDec={this.dec} />
                
            </div>
        )
    }
}

export default Contador;