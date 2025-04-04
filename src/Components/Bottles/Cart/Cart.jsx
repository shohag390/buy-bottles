import React from 'react';

const Cart = (props) => {
    const { cart, removeFromCart } = props;

    return (
        <div className='grid grid-cols-10 gap-[12px] pb-[20px]'>
            {cart.map((bottle) => (
                <div key={bottle?.id} className='border-[1px] border-[#510963] rounded-md p-[5px]' >
                    <img className='h-[80px] w-full' src={bottle?.img} alt="" />
                    <button onClick={() => removeFromCart(bottle?.id)} className='py-[4px] w-full bg-[#000] text-[#fff] rounded-md active:scale-[.9] duration-500 mt-[8px]'>delete</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;