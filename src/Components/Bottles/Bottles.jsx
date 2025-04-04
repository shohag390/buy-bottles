import { use, useEffect, useState } from 'react';
import Bottle from './Bottle';
import { addItemToCartLocalStorage, getCartFromLocalStorage, removeCartFromLocalStorage } from '../../utilities/localstorage';
import { Link } from 'react-router-dom';
import Cart from './Cart/Cart';


const Bottles = (props) => {

    const { bottlesPromise } = props;
    const bottles = use(bottlesPromise);
    const [cart, setCart] = useState([])
    console.log(cart);


    const handelAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart)
        addItemToCartLocalStorage(bottle.id)
    }

    const removeFromCart = (id) => {
        const removeBottle = cart.filter((bottle) => bottle?.id !== id)
        setCart(removeBottle)
        removeCartFromLocalStorage(id)
    }

    useEffect(() => {
        const storedCartItem = getCartFromLocalStorage();
        // console.log(storedCartItem);

        const storedCart = [];
        for (const id of storedCartItem) {
            const cartBottles = bottles.find(bottle => bottle.id === id);
            if (cartBottles) {
                storedCart.push(cartBottles);
            }
        }
        setCart(storedCart);
    }, [bottles])

    return (
        <div className='px-[80px] pb-[30px]'>
            <div className='font-medium text-[20px] text-[#510963] uppercase pb-[20px] pt-[30px] flex justify-between items-center'>
                <h4 className=''>Bottles Colection</h4>
                <p>Cart Item:{cart.length}</p>
            </div>
            <div>
                <Cart cart={cart} removeFromCart={removeFromCart} />
            </div>
            <div className='grid grid-cols-4 gap-[20px]'>
                {bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handelAddToCart={handelAddToCart} />)}
            </div>
        </div>
    );
};

export default Bottles;