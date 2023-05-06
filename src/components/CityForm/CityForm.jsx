import React from 'react';

function CityForm({ inputValue, handleChange, handleSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        placeholder="Search a city ..."
        value={inputValue}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <button type="submit">OK</button>
    </form>
  );
}

export default CityForm;
