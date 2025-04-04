import { use, useState } from 'react';
import Bottle from './Bottle';

const Bottles = (props) => {

    const { bottlesPromise } = props;
    const bottles = use(bottlesPromise);
    const [cart, setCart] = useState([])
    console.log(cart);


    const handelAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart)
    }

    return (
        <div className='px-[80px] pb-[30px]'>
            <div className='font-medium text-[20px] text-[#510963] uppercase pb-[20px] pt-[30px] flex justify-between items-center'>
                <h4 className=''>Bottles Colection</h4>
                <p>Cart Item: {cart.length}</p>
            </div>
            <div className='grid grid-cols-4 gap-[20px]'>
                {bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handelAddToCart={handelAddToCart} />)}
            </div>
        </div>
    );
};

export default Bottles;