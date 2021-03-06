/* eslint-disable */ 
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "../../StateProvider";
import {auth} from "../../firebase";

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    //Method to sign user out 
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    //The next 2 methods are simple event listeners for cosmetics
    const searchFocus = (e) => {
        e.target.style.border = "3px solid #cd9042";
    }

    const searchUnFocus = (e) => {
        e.target.style.border = "";
    }

    return (
        <div className='header'>
            <Link to="/">
                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"
                />
            </Link>
            
            <div className='header__search'>
                <input
                    className='header__searchInput' type='text'
                    onMouseOver={searchFocus} onMouseLeave={searchUnFocus}
                />
                <SearchIcon className="header__searchIcon" 
                onMouseOver={searchFocus} onMouseLeave={searchUnFocus}/>
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'} className="header__link">
                    <div onClick={handleAuthentication} className="header__option">
                        {/*If there is an authenticated user, It will display their email*/}
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        {/*If there is an authenticated user, text will display sign out*/}
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/orders" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        {/*If there are items in the basket, the length will display*/}
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
