import React from 'react'
import './header.css';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

function Header() {
    return (
        <div className='header'>
            <div className='mainlist'>
                <div className="list">
                    Micro-comm
                </div>
                <div className='logo'>
                    <div className="shopping"><FaShoppingCart /></div>
                    <div className="fb"><FaHeart /></div>
                </div>
            </div>
        </div>
    )
}

export default Header