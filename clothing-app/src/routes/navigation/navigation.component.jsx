import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';
import { selectCurrentUser } from "../../store/user/user.selector";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
import { signOutStart } from "../../store/user/user.action";


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo' />
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>SHOP</NavLink>
                {currentUser ? (
                  <NavLink as='span' onClick={() => dispatch(signOutStart())}>SIGN OUT</NavLink>
                ) : (
                  <NavLink to='/auth'>SIGN IN</NavLink>
                )}
                <CartIcon/>
            </NavLinks>
            {isCartOpen && (<CartDropdown/>)}
            
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;