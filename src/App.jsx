import { useState , useRef } from 'react'
import './App.css'

function App() {
  const [startTime, setstartTime] = useState(null)
  const [now, setnow] = useState(null)
  let inetrval = useRef(0)

  function start() {
    setstartTime(Date.now());
    setnow(Date.now());

    clearInterval(inetrval.current);
    inetrval.current = setInterval(()=>{
      setnow(Date.now())
    },10)
  }

    function stop() {
      clearInterval(inetrval.current);
    }

    let secondpassed = 0 ;
    // let res =0;
    if (startTime != null && now != null) {
      secondpassed = ( now -startTime)/1000;
    }
    let res = secondpassed / 60;

  return (
    <>
    <h1>It is an Stopwatch Project</h1>
    <h2>Time:-{secondpassed.toFixed(3)}</h2>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    <p>You have stoped the timer at(minutes) : {res.toFixed(2)}</p>
    </>
  )
}

export default App
