import React, { useEffect, useState } from 'react'
import './Header.scss'

import { useLocation, useNavigate } from 'react-router-dom'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/movix-logo.svg";
// import logo from "../../assets/movix-logo.png";



const Header = () => {

    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();


    const openMobileMenu = () => {
        setMobileMenu(true)
        setShowSearch(false)
    }

    const openSearch = () => {
        setShowSearch(true)
        setMobileMenu(false)
    }



    return (
        <header className='header'>
            <ContentWrapper>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="menuItems">
                    <li className="menuItem">Movies</li>
                    <li className="menuItem">TV Shows</li>
                    <li className="menuItem"><HiOutlineSearch /></li>
                </ul>
                <div className="mobileMenuItems">
                    <HiOutlineSearch />
                    {
                        mobileMenu ? <VscChromeClose onClick={()=>setMobileMenu(false)}/> : <SlMenu onClick={openMobileMenu} />
                    }

                </div>
            </ContentWrapper>
        </header>
    )
}

export default Header