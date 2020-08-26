import React, { Component} from 'react';
import './Calculadora.css';
import Button from '../Button/Button';
import Display from '../Display/Display';

export default class Calculadora extends Component {
    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        console.log('limpar')
    }

    setOperation(operation) {
        console.log(operation)
    }
 
    addDigit(n) {
        console.log(n)
    }

    render() {
        return (
            <div className="Calculadora">
                
                <div className="Calculator">
                    <Display value={0} />
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