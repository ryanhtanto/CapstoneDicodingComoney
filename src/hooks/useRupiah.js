import React from 'react';

function useRupiah(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);

  const formatToRupiah = (number) => {
    const stringNumber = String(number);
    const split = stringNumber.split(',');
    const sisa = split[0].length % 3;
    let rupiah = split[0].substring(0, sisa);
    const ribuan = split[0].substring(sisa).match(/\d{3}/gi);
    if (ribuan) {
      const separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
    rupiah = split[1] !== undefined ? `${rupiah},${split[1]}` : rupiah;
    setValue(rupiah);
  };

  return [value, formatToRupiah];
}

export default useRupiah;
