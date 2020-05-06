import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';



const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length ?( 
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))) : (<span className='empty-message'>Your cart is empty</span>)
        }
        </div>
        <CustomButton onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >GO TO CHECKOUT</CustomButton>
    </div>
);

//this mapStateToProps is different because it doesn't use the structuredselector because is only passing 1 prop.
const mapStateToProps = (state ) => ({ cartItems: selectCartItems(state)});

//connect since we're not putting a second parameter conly mapStateToProps it will 
//automatically do the mapDispatch function which will allow us to use dispatch above.
export default withRouter(connect(mapStateToProps)(CartDropdown));