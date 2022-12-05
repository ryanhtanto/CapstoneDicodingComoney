import React from 'react';

function useInput(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const setDefaultValue = (valueParam) => {
    setValue(valueParam);
  };

  return [value, handleValueChange, setDefaultValue];
}

export default useInput;
