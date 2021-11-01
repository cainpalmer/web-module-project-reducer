import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers/index';
import {applyNumber, changeOperation, clearDisplay, memoryRecall, memoryTotal, memoryClear} from './actions/index.js';
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const eventHandler = (number) => {
    dispatch(applyNumber(number));
  };

  const addOperator = () => {
    dispatch(changeOperation('+'));
  };

  const multiplyOperator = () => {
    dispatch(changeOperation('*'));
  };

  const subtractOperator = () => {
    dispatch(changeOperation('-'));
  };

  const displayHandler = () => {
    dispatch(clearDisplay());
  };

  const memoryTotalHandler = () => {
    dispatch(memoryTotal())
  };

  const memoryRecallHandler = () => {
    dispatch(memoryRecall());
  };

  const memoryClearHandler = () => {
    dispatch(memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onCLick = {memoryTotalHandler} value={"M+"}/>
              <CalcButton onCLick = {memoryTotalHandler} value={"MR"}/>
              <CalcButton onCLick = {memoryTotalHandler} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onCLick = {() => eventHandler(1)} value={1}/>
              <CalcButton onCLick = {() => eventHandler(2)} value={2}/>
              <CalcButton onCLick = {() => eventHandler(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onCLick = {() => eventHandler(4)} value={4}/>
              <CalcButton onCLick = {() => eventHandler(5)} value={5}/>
              <CalcButton onCLick = {() => eventHandler(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onCLick = {() => eventHandler(7)} value={7}/>
              <CalcButton onCLick = {() => eventHandler(8)} value={8}/>
              <CalcButton onCLick = {() => eventHandler(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onCLick = {addOperator} value={"+"}/>
              <CalcButton onCLick = {multiplyOperator} value={"*"}/>
              <CalcButton onCLick = {subtractOperator} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onCLick = {displayHandler} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
