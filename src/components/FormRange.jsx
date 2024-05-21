
import { useState } from 'react';
const FormRange = ({ label, name, size, price }) => {
  const step = 10;
  const maxPrice = 50000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className='form-control'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text'>{label}</span>
        <span>{ selectedPrice } грн.</span>
      </label>
      <input
        type='range'
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className='w-full flex justify-between text-xs px-2 mt-2'>
        <span className='font-bold text-md'>0 грн.</span>
        <span className='font-bold text-md'>Максимум : {maxPrice} грн.</span>
      </div>
    </div>
  );
};
export default FormRange;
