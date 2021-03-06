import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider';


function Header() {
    const[{basket, user}]=useStateValue();

    const login=()=>{
if(user){
    auth.signOut();
}
    }
    return (
        <nav className="header">
            {/* logo on the left */}
            <Link to="/">
            <img className="header__logo" src="/images/logo.png" alt="" />
            </Link>
            
            {/* searchbox */}
            <div className="header__search" >
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!user && "/login"} className="header__link">
                <div onClick ={login} className="header__option">
                    <span className="header__optionLineOne">Hello {user?.email}</span>
                    <span className="header__optionLineTwo">{user?'Sign out':'Sign in'}</span>
                </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& orders</span>
                </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                </Link>

                {/* 4th link */}
                <Link to ="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* shopping baske icon */}
                        <ShoppingBasketIcon />
                        {/* number of items in basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            
            
        </nav>
    )
}

export default Header
