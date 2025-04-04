import React from 'react';

const Bottle = (props) => {
    const { bottle, handelAddToCart } = props;
    const { img, name, price, category } = bottle;


    return (
        <div className='border-[1px] border-[#510963] rounded-md p-[15px]'>
            <img className='rounded-sm' src={img} alt="" />
            <h4 className='font-medium text-[18px] pt-[5px]'>{name}</h4>
            <div className='flex items-center justify-between pb-[10px]'>
                <p>{category}</p>
                <p>${price}</p>
            </div>
            <button onClick={() => handelAddToCart(bottle)} className='py-[10px] w-full bg-[#000] text-[#fff] rounded-md active:scale-[.9] duration-500'>
                Add To Cart
            </button>
        </div>
    );
};

export default Bottle;