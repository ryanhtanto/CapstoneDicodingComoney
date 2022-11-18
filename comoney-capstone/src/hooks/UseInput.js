import React from 'react';

function useInput(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);
  const handleValueChange = (event) => {
    setValue(event.target.value);
  }
  return [value, handleValueChange];
}

export default useInput;
