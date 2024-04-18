import React, { useState } from 'react';
import './navigation.css';
import { Hamburger, CloseMenu } from './Svg';

function Navigation() {
    const [mobileNav, setMobileNav] = useState(true)

    const toggleMobileNav = (e) => {

        const className = e.target.className;
        console.log(className);

        setMobileNav((preValue) => {
            return !preValue
        })

    }
    return (
        <div className='navigation'>
            <h1 className='web-name'>crowdfund</h1>
            <button className='mobile-nav-toggle'>
                <Hamburger onclick={toggleMobileNav} dataVisible={mobileNav} />
                <CloseMenu onclick={toggleMobileNav} dataVisible={mobileNav} />
            </button>
            <ul className='nav-list' data-visible={!mobileNav}>
                <li><a href="#about">About</a></li>
                <li>Discover</li>
                <li>Get Started</li>
            </ul>
        </div>
    )
}

export default Navigation
