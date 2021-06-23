import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState();

  const add1 = () => {
    // console.log(parseFloat(num1) + parseFloat(num2));
    setSum(parseFloat(num1) + parseFloat(num2));
    // default fetch is get request
    fetch(`http://localhost:3001/add/${num1}/${num2}`).then((res) => {
      return res.text();
    }).then((text) => {
      setSum(text);
    });
    // fetch('http://localhost:3001').then(res => {
    //   return res.text();
    // }).then((text) => {
    //   console.log(text);
    // });
  };

  const add2 = () => {
    fetch(`http://localhost:3001/add2?num1=${num1}&num2=${num2}`).then((res) => {
      return res.text();
    }).then((text) => {
      setSum(text);
    });
  };

  const add3 = () => {
    fetch(`http://localhost:3001/add3`, {
      method: "POST",
      body: JSON.stringify({num1: num1, num2: num2}),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      return res.json();
    }).then((jsonData) => {
      // console.log(jsonData);
      setSum(jsonData.sum);
    });
  };

  return (
    <div className="App m-2">
      <h1>Calculator</h1>
      {sum ? <p>Sum: {sum}</p> : null}
      <label>Num 1: </label>
      <input type="number" className="form-control" value={num1} onChange={(event) => {setNum1(event.target.value)}} />
      <label className="mt-2">Num 2: </label>
      <input type="number" className="form-control" value={num2} onChange={(event) => {setNum2(event.target.value)}} />
      <button className="btn btn-primary m-2" onClick={add1}>Add 'em up 1 (route params)</button>
      <button className="btn btn-primary m-2" onClick={add2}>Add 'em up 2 (query params)</button>
      <button className="btn btn-primary m-2" onClick={add3}>Add 'em up 3 (body)</button>
    </div>
  )
};

export default App;
