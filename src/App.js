import { useState } from "react";
import "./style.css";

function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  function handleClick(e) {
    setInput((prev) => prev.concat(e.target.name));
    //setInput(prev => [...prev, e.target.name])
    //console.log(input);
  }
  function handleAC() {
    //setInput([]);
    setInput("");
    setResult("");
  }
  function handleDel() {
    setInput(input.slice(0, -1));
    //setInput(prevNote => [...prevNote.slice(0,-1)]);
    setResult(0);
    console.log(input);
    console.log(result);
  }

  function calculate() {
    try {
      setResult(eval(input).toString());

      // input.map(e => newResult += e)
      // setResult(parseInt(newResult));
    } catch (err) {
      setResult("Error");
    }
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{input}</div>
        <div className="current-operand">{result}</div>
      </div>
      <button onClick={handleAC} className="span-two">
        AC
      </button>
      <button onClick={handleDel}>DEL</button>
      <button name="/" onClick={handleClick}>
        ÷
      </button>
      {/*  */}
      <button name="1" onClick={handleClick}>
        1
      </button>
      <button name="2" onClick={handleClick}>
        2
      </button>
      <button name="3" onClick={handleClick}>
        3
      </button>
      <button name="*" onClick={handleClick}>
        ×
      </button>
      {/*  */}
      <button name="4" onClick={handleClick}>
        4
      </button>
      <button name="5" onClick={handleClick}>
        5
      </button>
      <button name="6" onClick={handleClick}>
        6
      </button>
      <button name="+" onClick={handleClick}>
        +
      </button>
      {/*  */}
      <button name="7" onClick={handleClick}>
        7
      </button>
      <button name="8" onClick={handleClick}>
        8
      </button>
      <button name="9" onClick={handleClick}>
        9
      </button>
      <button name="-" onClick={handleClick}>
        -
      </button>
      {/*  */}
      <button name="." onClick={handleClick}>
        .
      </button>
      <button name="0" onClick={handleClick}>
        0
      </button>
      <button onClick={calculate} className="span-two">
        =
      </button>

      <div className="info">
        Deisgn copied from https://www.youtube.com/watch?v=DgRrrOt0Vr8&t=614s
        and code copied from https://www.youtube.com/watch?v=hpfDRnijdPE
      </div>
    </div>
  );
}

export default App;
