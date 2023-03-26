'use client'
import { useState, useEffect } from "react";

import Hamburgermenu from "../shared/hamburgermenu";
import Navigation from "./navigation";

const Header = () => {

    const [nav_open, setNav] = useState<boolean>(false);
    const [current_page, setCurrentPage] = useState<string>('home');

    const handleNavigationLayer = ():void => {
        nav_open ? setNav(false) : setNav(true); 
    }

    const handleMenuItemClick = (page: string):void => {
        setCurrentPage(page);
        handleNavigationLayer();
    }

    return (
        <header>
            <Navigation open={nav_open} handleMenuItemClick={handleMenuItemClick}/>
            <div className="container">
                <div className="w-100 d-flex justify-content-between">
                    <Hamburgermenu handleNavigationLayer = {handleNavigationLayer} />
                    <div>Logo</div>
                </div>
            </div>
        </header>
    )
}

export default Header;