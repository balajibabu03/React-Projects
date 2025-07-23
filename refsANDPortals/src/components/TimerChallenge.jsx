import { useState, useRef } from "react";
import ResultModal from "./ResultModal";


export default function TimerChallenge({title, targetTime}){
    const timer = useRef();
    const dialog = useRef();
    let [timerStarted, SetTimerStarted] = useState(false)
    let [timerExpired, SetTimerExpired] = useState(false)

    function handleStart(){
        timer.current=  setTimeout(() => {
            SetTimerExpired(true)
            dialog.current.open();
        }, targetTime * 1000);

        SetTimerStarted(true)
    }

    function handleStop(){
        clearTimeout(timer.current );
        // SetTimerStarted(false)
        // SetTimerExpired(false)
    }

    return (
        <>
        <ResultModal ref={dialog} targetTime={targetTime} result={'lost'}></ResultModal>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">{targetTime} Second{targetTime > 1 ? "s" : ""}</p>
            <p><button onClick={timerStarted ? handleStop : handleStart} >{timerStarted ? 'Stop' : 'Start'} Button</button></p>
            <p className={timerStarted ? "active" : undefined}>{timerStarted ? 'Time is running...' : 'Time inactive'}</p>
        </section>
        </>
    )
}