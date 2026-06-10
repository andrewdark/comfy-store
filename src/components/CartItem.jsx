
const CartItem = ({ cartItem }) => {
    const { cartID, title, price, image, amount, company, productColor } = cartItem;
    return (
        <div>
            <li>I am a {title}</li>
        </div>
    );
};

export default CartItem;