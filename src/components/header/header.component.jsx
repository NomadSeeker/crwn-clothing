import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import{ ReactComponent as Logo } from '../../assets/crown.svg';
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {createStructuredSelector} from 'reselect';
import{selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import CartIcon from '../cart-icon/cart-icon.component';





const Header=({currentUser, hidden}) => (
    <div className='header'>
        <Link className = 'logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                : 
                (<Link className='option' to='/signin'>SIGN IN</Link>)
            }
            <CartIcon/>
        </div>

        { hidden ? null : <CartDropdown/>}
    </div>
);

/* ESta es otra forma de mapear el estado
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
*/

//The sturcturedselector allows us to pass the state withoug having to make it a function and repeat the (user) on each prop
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
