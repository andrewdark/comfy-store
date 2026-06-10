
import { useSelector } from 'react-redux';
import { SectionTitle, CartItemsList, CartTotals } from '../components'
import { Link } from 'react-router-dom';

const Cart = () => {

    const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

    if (numItemsInCart === 0) {
        return <h1 className='text-3xl'>Your cart is empty</h1>;
    }

    return (
        <>
            <SectionTitle text='Shopping Cart' />
            <div className='mt-8 grid gap-8 lg:grid-cols-12'>
                <div className='lg:col-span-8'>
                    <CartItemsList />
                </div>
                <div className='lg:col-span-4 lg:pl-4'>
                    <CartTotals />

                    <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
                        proceed to checkout
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Cart;