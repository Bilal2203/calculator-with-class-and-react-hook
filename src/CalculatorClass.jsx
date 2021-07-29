import React from 'react'
      
export class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            inputValue1: 1,
            inputValue2: 1,
            result: 0
        }
        this.inputHandler = this.inputHandler.bind(this)
    }
    inputHandler = (e) => {
        // console.log(e.target.name)
        // if (e.target.name === 'inputValue1') {
        //     this.setState(() => ({ inputValue1: parseInt(e.target.value) }))
        // }else{
        //     this.setState(() => ({inputValue2: parseInt(e.target.value)}))
        // }
        this.setState(() => ({[e.target.name]: parseInt(e.target.value) }))
    }
    onPlus = () => {
        this.setState(() => ({ result: parseInt(this.state.inputValue1) + parseInt(this.state.inputValue2) }))
    }
    onMinus = () => {
        this.setState(() => ({ result: this.state.inputValue1 - this.state.inputValue2 }))
    }
    onMult = () => {
        this.setState(() => ({ result: this.state.inputValue1 * this.state.inputValue2 }))
    }
    onDivice = () => {
        this.setState(() => ({ result: this.state.inputValue1 / this.state.inputValue2 }))
    }
    render() {
        return (
            <div style={{ margin: '0 auto', background: '#d89cf6', height: 200, width: 700}}>
                 <h1>Calculator with classes</h1>
                <input
                    type="number"
                    value={this.state.inputValue1}
                    onChange={this.inputHandler}
                    name="inputValue1" />
                <button onClick={this.onPlus}>+</button>
                <button onClick={this.onMinus}>-</button>
                <button onClick={this.onMult}>*</button>
                <button onClick={this.onDivice}>/</button>
                <input
                    type="number"
                    value={this.state.inputValue2}
                    onChange={this.inputHandler}
                    name="inputValue2" />
                <h1 style={{ textAlign: 'center', width: '200px' }}>result:{this.state.result}</h1>
                <hr/>
            </div>
        )
    }
}