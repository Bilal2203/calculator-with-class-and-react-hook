import React, { useState } from 'react'
export const Calculator2 = () => {
    const [inputValues, setInputValues] = useState({
        input1: 2,
        input2: '+',
        input3: 2,
        result: 0
    })
    const inputHandler = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value }) 
    }
   
    const onCalc = (e) => {
        switch (inputValues.input2) {
            case '+':
                setInputValues({ ...inputValues, result: +inputValues.input1 + +inputValues.input3 })
                break
            case '-':
                setInputValues({ ...inputValues, result: inputValues.input1 - inputValues.input3 })
                break
            case '*':
                setInputValues({ ...inputValues, result: inputValues.input1 * inputValues.input3 })
                break
            case '/':
                setInputValues({ ...inputValues, result: inputValues.input1 / inputValues.input3 })
                break
            default:
                setInputValues({ ...inputValues, result: 'enter one of the characters (+,-,*,/)' })
        }
    }
    const onClear = (e) =>{
        setInputValues({...inputValues, 
            input1: '',
            input2: '',
            input3: '',
            result: ''
        })
    }
    return (
        <div style={{ margin: '0  auto', background: '#d89cf6', height: 300, width: 700}}>
            <h1>Calculator with hooks</h1>
            <input
                type="number"
                value={inputValues.input1}
                onChange={inputHandler}
                name="input1"
                placeholder="enter the number"
            />
            <input
                type="text"
                value={inputValues.input2}
                name="input2"
                onChange={inputHandler}
                placeholder="+,-,*,/"
            />
            <input
                type="number"
                value={inputValues.input3}
                name="input3"
                onChange={inputHandler}
                placeholder="enter the number"
            />
            
            <button style={{ width: '60px'}} onClick={onCalc}>sum</button>
            <button style={{ width: '70px'}} onClick={onClear}>clear</button>
            <h1 style={{ textAlign: 'center', width: '200px' }}>result: {inputValues.result}</h1>
            <hr />
        </div>
    )
}