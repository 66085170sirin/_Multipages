import { useEffect, useState } from 'react';

import './Timer.css';

function Timer() {
     const [running, setRunning] = useState(false);
     const [seconds, setSeconds] = useState(58);
    
    useEffect(() => {
        let interval = null;
        if (running){
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000)
        }
        return () => clearInterval(interval);
    },[running, seconds]);
    
    
     function runClick() {
        setRunning(!running);
    }


    function secondsToString(seconds) {
        const MINUTE_SECONDS = 60;
        const HOUR_SECONDS = 60 * MINUTE_SECONDS;
        const DAY_SECONDS = 24 * HOUR_SECONDS;
    
        const days = Math.floor(seconds / DAY_SECONDS);
        const hours = Math.floor((seconds % DAY_SECONDS) / HOUR_SECONDS);
        const minutes = Math.floor((seconds % HOUR_SECONDS) / MINUTE_SECONDS);
        const secs = seconds % MINUTE_SECONDS;

        if (days > 0) {
            return `${days}d ${hours}h ${minutes}m ${secs}s`;
        } else if (hours > 0) {
            return `${hours}h ${minutes}m ${secs}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${secs}s`;
        } else {
            return `${secs}s`;
        }
    }

    function resetClick()  {
        setSeconds(0);
        setRunning(false);
    }

    return ( 
        <div className='timer-container'>
            <h3 className='timer-title'>Timer</h3>
            <p>
                <input className='timer-display' 
                type="text" 
                readOnly={true} 
                value={secondsToString(seconds)}
            />
            </p>
            
            
            <div className='timer-buttons'>
                <button className='btn btn-danger bi bi-arrow-clockwise' onClick={resetClick}>Reset</button>
                <button className={'btn ' +  (running ? 'btn-warning bi bi-pause ' : 
                    'btn-success bi bi-play')} onClick={runClick}>
                    {running ? 'Pause' : 'Run'}
                </button>
            </div>
        </div>
     );
}

export default Timer;