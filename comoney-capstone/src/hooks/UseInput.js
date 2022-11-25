import React from 'react';

function useInput(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);
  const handleValueChange = (event) => {
    setValue(event.target.value);
  }

  const setDefaultValue = (value) => {
    setValue(value)
  }

  return [value, handleValueChange, setDefaultValue];
}

export default useInput;
