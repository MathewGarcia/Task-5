import React, { useReducer } from 'react';
const Counter = () => {
    const initialState = {
        currentNumber: 0,
        numberToChangeBy: 1,
    }
    const reducer = (state, action) => {
        console.log(state,action);
        switch(action.type){
            case 'inc': return {
                ...state,
            currentNumber: state.currentNumber + parseInt(state.numberToChangeBy,10)
            };
            case 'dec': return {
                ...state,
                currentNumber: state.currentNumber -  parseInt(state.numberToChangeBy,10)
            };
            case 'number' : return {
                ...state,
                numberToChangeBy: action.value,
            };     
        }
        return state;
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const updateCount = (e) => {
        dispatch({type: e.target.name, value: e.target.value, currentNumber: state.currentNumber});
    }

    return (<div className="App">
    <pre className="rainbow box text-center">Value {state.currentNumber}</pre>
    <div className="flex gap center">
        <button className="button-box" type ="button" name = "inc" onClick={updateCount}><span className="huge">+</span>Increment by {state.numberToChangeBy}</button>
        <button className="button-box" type = "button" name = "dec" onClick={updateCount}><span className="huge">-</span>Decrement by {state.numberToChangeBy}</button></div>
        <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input type = "number"  pattern="[0-9]*" className="input-box"  onChange={updateCount} value={state.numberToChangeBy} name="number" id="number" /></p>
  </div>);
}

export default Counter;