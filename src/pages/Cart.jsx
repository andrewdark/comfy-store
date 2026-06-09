
import { useDispatch, useSelector } from 'react-redux';

import { clearCart } from '../features/cart/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

    if (numItemsInCart === 0) {
        return <h1 className='text-3xl'>Your cart is empty</h1>;
    }


    const clearTheCart = () => {
        dispatch(clearCart())
    };

    return (
        <div>
            <h1 className='text-3xl'>Cart has {numItemsInCart} items</h1>
            <button className='btn btn-info border-2'
                onClick={clearTheCart}
            >Clear the cart</button>
        </div>
    );
};

export default Cart;