import '../../CSS/Timer.scss'
import Stop from '../../assets/stop.svg'
import Play from '../../assets/play.svg'
import Pause from '../../assets/pause.svg'

import React, { useEffect, useState } from 'react';

const Timer = (props) => {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [isActive, setIsActive] = useState(props.isActive);

  ///toggle on/off this timer
  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => (seconds + 1));
        setMinutes(minutes => 
          Math.floor((seconds / (60)) % 60)
             .toLocaleString('en-US',{
               minimumIntegerDigits: 2,
               useGrouping: false
             }));
        setHours(hours => 
          Math.floor((seconds / (60 * 60)) % 24)
          .toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          }));
        setDays(days => 
          Math.floor(seconds / (60 * 60 * 24))
          .toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          }));
      }, 1000);
    }
    else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => { clearInterval(interval); }
  }, [isActive, seconds]);

  return (
    <div className="timer div-row">
      <div className="time">
        {days}:{hours}:{minutes}:{(seconds % 60).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false
        })}
      </div>
      <div className="div-row">
        <div
          onClick={toggle}
          className={`div-button div-button-primary div-button-primary-${isActive ? 'active' : 'inactive'}`}
        >{isActive ? <img className="svg-icon-pause" src={Pause} alt="Reset" /> 
                   : <img className="svg-icon-play" src={Play} alt="Reset" />}
        </div>
        <div
          onClick={reset}
          className={`div-button`}
        >
          <img src={Stop} className="svg-icon-stop" fill="red" alt="Reset"/>
        </div>
      </div>
    </div>
  );
}

export default Timer;