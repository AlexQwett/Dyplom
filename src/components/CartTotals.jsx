import React from 'react'
import { useSelector } from 'react-redux';

const CartTotals = () => {
  const { amount } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const tax = total / 5;
  const shipping = 50;
  return (
    <div className='card bg-blue-200'>
      <div className='card-body'>
        {/* SUBTOTAL */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content'>
          <span>Subtotal</span>
          <span className='font-medium'>{ Math.round(total) } грн.</span>
        </p>
        {/* SHIPPING */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content'>
          <span>Доставка</span>
          <span className='font-medium'>{ shipping } грн.</span>
        </p>
        {/* Tax */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content'>
          <span>ПДВ 20%</span>
          <span className='font-medium'>{Math.round(tax)} грн.</span>
        </p>
        {/* Order Total */}
        <p className='flex justify-between text-sm mt-4 pb-2 text-accent-content'>
          <span>Сума замовлення</span>
          <span className='font-medium'>{ Math.round(total + shipping + tax) } грн.</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotals