import React, { useState, useEffect } from 'react';
import './Clock.scss';
import addZeroBefore from '../../utils/clockFormat';

function Clock(props) {
  const { city, time, resetClock, addOneSecond } = props;

  // Utilisation du hook useState pour gérer l'état du temps
  const [currentTime, setCurrentTime] = useState(new Date(time));

  // Utilisation du hook useEffect pour lancer et nettoyer l'effet de bord
  useEffect(() => {
    const intervalId = setInterval(() => {
      addOneSecond();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [addOneSecond]);

  // Utilisation du hook useEffect pour mettre à jour l'état du temps toutes les secondes
  useEffect(() => {
    setCurrentTime(new Date(time));
  }, [time]);

  return (
    <div className="Clock">
      <button type="button" className="Clock-close" onClick={resetClock}>
        X
      </button>
      <h2>{city}</h2>
      <p className="Clock-time">
        <span>{addZeroBefore(currentTime.getHours())}</span>:
        <span>{addZeroBefore(currentTime.getMinutes())}</span>:
        <span>{addZeroBefore(currentTime.getSeconds())}</span>
      </p>
    </div>
  );
}

export default Clock;
