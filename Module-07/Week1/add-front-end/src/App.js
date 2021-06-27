import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState();

  const add1 = () => {
    setSum(parseFloat(num1) + parseFloat(num2));
    // default fetch is get request
    fetch(`http://localhost:3001/add/${num1}/${num2}`).then((res) => {
      return res.text();
    }).then((text) => {
      setSum(text);
    });
    // // initial fetch to test if it's working (installed & set up express cors middleware on backend to fix cors error that results from this initially)
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

  // send json as a string and note as json in the headers so the back end will know to translate it back to json.
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
      // console.log(jsonData); // check what's returning and use key to filter out other data in the object
      setSum(jsonData.sum);
    });
  };

  return (
    <div className="App m-2">
      <h1>Calculator</h1>
      {/* only show line for sum if there's data in it. for add1 & add2 0 will display because the response is coming back as a string. Does not display in add3 because sum is a number in the object and it's falsy. added sum ||sum=== 0 to fix this */}
      {sum || sum===0 ? <p>Sum: {sum}</p> : null}
      <label>Num 1: </label>
      <input type="number" className="form-control" value={num1} onChange={(event) => {setNum1(event.target.value)}} />
      <label className="mt-2">Num 2: </label>
      <input type="number" className="form-control" value={num2} onChange={(event) => {setNum2(event.target.value)}} />
      <button className="btn btn-primary m-2" onClick={add1}>Add 'em up 1 (route params)</button>
      <button className="btn btn-primary m-2" onClick={add2}>Add 'em up 2 (query params)</button>
      <button className="btn btn-primary m-2" onClick={add3}>Add 'em up 3 (body)</button>
    </div>
  );
};

export default App;
