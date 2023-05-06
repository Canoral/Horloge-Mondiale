import React, { useState } from 'react';
import axios from 'axios';
import CityForm from '../CityForm/CityForm';
import Clock from '../Clock/Clock';
import './App.scss';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [location, setLocation] = useState('');
  const [datetime, setDatetime] = useState('');

  const fetchTime = async () => {
    if (inputValue !== '') {
      try {
        const result = await axios.get(
          `https://timezone.abstractapi.com/v1/current_time/?api_key=b8fe551eb2914f2e9299f214fc2ce86c&location=${inputValue}`
        );
        setDatetime(result.data.datetime);
        setLocation(result.data.timezone_location);
      } catch (e) {
        console.log(e);
      }
    } else {
      resetClock();
    }
  };

  const incrementDateTime = () => {
    const dt = new Date(datetime);
    const dtNext = dt.setSeconds(dt.getSeconds() + 1);
    setDatetime(dtNext);
  };

  const resetClock = () => {
    setLocation('');
    setDatetime('');
  };

  return (
    <div className="App">
      <h1>My Clock</h1>
      <CityForm
        inputValue={inputValue}
        handleChange={setInputValue}
        handleSubmit={fetchTime}
      />
      {datetime !== '' && (
        <Clock
          city={location}
          time={datetime}
          addOneSecond={incrementDateTime}
          resetClock={resetClock}
        />
      )}
    </div>
  );
}

export default App;
