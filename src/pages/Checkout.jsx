import { clearCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
const Checkout = () => {
    const dispatch = useDispatch();
    const clearTheCart = () => {
        dispatch(clearCart())
    };

    return (
        <div>
            <h1>Checkout</h1>
            <button className='btn btn-info border-2'
                onClick={clearTheCart}
            >Clear the cart</button>
        </div>
    );
};

export default Checkout;