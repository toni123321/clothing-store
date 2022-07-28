import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </CheckoutHeader>
            {
                cartItems.map((cartItem) =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>                    
                )
            }
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}
export default Checkout;