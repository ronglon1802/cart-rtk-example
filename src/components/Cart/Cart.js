import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increment, decrement, clear } from '../../redux/cardSlice';
import './Cart.scss'

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    console.log(cart);
    return (
        <>
            <h1>Cart Page</h1>
            <table>
                <tr>
                    <td></td>
                    <td>Tên</td>
                    <td>Gía tiền</td>
                    <td>Số lượng</td>
                </tr>
                {cart.cartItems.length === 0 ? <div>empty</div> :

                    cart.cartItems.map((item, index) => (
                        <tr key={index}>
                            <button onClick={() => dispatch(clear())}>Clear cart</button>
                            <td><img src={item.image} alt='ava' /></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => dispatch(increment(item))}>+</button>
                                {item.quantity}
                                <button onClick={() => dispatch(decrement(item))}>-</button>
                            </td>
                            <td><button onClick={() => dispatch(removeFromCart(item))}>Remove</button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Cart;