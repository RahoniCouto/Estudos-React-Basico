import React, { Component} from 'react';
import './Calculadora.css';
import Button from '../Button/Button';
import Display from '../Display/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    oeration: null,
    values: [0, 0],
    current: 0
}

export default class Calculadora extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        if( this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const finalOperation = operation === '='
            const currentOperation = this.state.operation

            const values = [ ...this.state.values]
            
            values[0] = () => {
                let resultado = 0;
                switch(currentOperation){
                    case '+':
                        resultado=values[0] + values[1];
                    break;
                    case '-':
                        resultado=values[0] - values[1];
                    break;
                    case '*':
                        resultado=values[0] * values[1];
                    break;
                    case '/':
                        resultado=values[0] / values[1];
                    break;
                    default:
                        resultado=0
                }
                return resultado
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: finalOperation ? null : operation,
                current: finalOperation ? 0 : 1,
                clearDisplay: !finalOperation,
                values
            })
        }
    }
 
    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [ ...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render() {
        return (
            <div className="Calculadora">
                
                <div className="Calculator">
                    <Display value={ this.state.displayValue} />
                    <Button label="AC" click={this.clearMemory} triple operation />
                    <Button label="/" click={this.setOperation} operation  />
                    <Button label="7" click={this.addDigit} />
                    <Button label="8" click={this.addDigit} />
                    <Button label="9" click={this.addDigit} />
                    <Button label="*" click={this.setOperation} operation  />
                    <Button label="4" click={this.addDigit} />
                    <Button label="5" click={this.addDigit} />
                    <Button label="6" click={this.addDigit} />
                    <Button label="-" click={this.setOperation} operation  />
                    <Button label="1" click={this.addDigit} />
                    <Button label="2" click={this.addDigit} />
                    <Button label="3" click={this.addDigit} />
                    <Button label="+" click={this.setOperation} operation  />
                    <Button label="0" click={this.addDigit} duble />
                    <Button label="." click={this.addDigit} />
                    <Button label="=" click={this.setOperation} operationFinal  />
                </div>
            </div>
        )
    }
}