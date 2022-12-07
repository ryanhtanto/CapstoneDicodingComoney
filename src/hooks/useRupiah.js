import React from 'react';

function useRupiah(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);

  const formatToRupiah = (number) => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      currency: 'IDR',
    });

    setValue(formatter.format(number));
  };

  return [value, formatToRupiah];
}

export default useRupiah;
