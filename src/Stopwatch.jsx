import React,{useState} from "react";


const Stopwatch=()=>{
    const [isRunning,setIsRunning] = useState(false);
    const [seconds,setSeconds] = useState(0);
    const[intvId,setIntvid]=useState(null);
    function handleReset(){
        setIsRunning(false);
        setSeconds(0);
        clearInterval(intvId);
    }
    function handleStop(){
     setIsRunning(false);
     clearInterval(intvId);
    }
    function handleStart(){
       setIsRunning(true);
       const id = setInterval(()=>{
        setSeconds((seconds)=>seconds+1);
    },1000);
    setIntvid(id);
    }
    function assignedTime(time){
        const seconds=time%60;
        const minutes=Math.floor(time/60);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
    return(
        <div>
            <h2>Stopwatch</h2>
             <p>Time: {assignedTime(seconds)}</p>
        {
            isRunning ?
            (
                <button onClick={handleStop}>Stop</button>
            ):
            (
                <button onClick={handleStart}>Start</button>
            )
        }
        <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default Stopwatch;