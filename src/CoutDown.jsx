import { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(true);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setElapsedTime(prevTime => prevTime - 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const startStopwatch = () => {
        setIsRunning(true);
    };

    const stopStopwatch = () => {
        setIsRunning(false);
    };

    const resetStopwatch = () => {
        setIsRunning(false);
        setElapsedTime(0);
    };

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div>
            <p className='text-2xl'>Elapsed Time:{formatTime(elapsedTime)}</p>
            <button onClick={startStopwatch} disabled={isRunning}>Start</button>
            <button onClick={stopStopwatch} disabled={!isRunning}>Stop</button>
            <button onClick={resetStopwatch}>Reset</button>
        </div>
    );
};

export default Stopwatch;
