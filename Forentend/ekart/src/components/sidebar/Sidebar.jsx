import React, { useState } from 'react'
import './Sidebar.css'
import { FaTh, FaBars, FaFire, FaSitemap, FaMobile, FaRegistered, FaUser, } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/product",
            name: "Producttab",
            icon: <FaMobile />
        },
        {
            path: "/subproduct",
            name: "Subproducttab",
            icon: <FaSitemap />
        },
        {
            path: "/offerdata",
            name: "Offertab",
            icon: <FaFire />
        },
        {
            path: "/admin",
            name: "Admintab",
            icon: <FaRegistered />
        },
        {
            path: "/user",
            name: "Usertab",
            icon: <FaUser />
        },
    ]
    return (
        <div className='containers'>
            <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="l ink_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}
