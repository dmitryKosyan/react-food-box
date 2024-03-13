import React from 'react'

import CartImg from '../Cart/CartImg'
import Logo from '../../UI/Logo'
import './Header.css'
import NavList from './NavList'
import SortPrice from './SortPrice'
import Search from '../../UI/Search'


const Header = ({ sumCartCount, indexActive, setIndexActive }) => {


    return (
        <header className='header'>
            <div className="container-header">
                <Logo />
                <div className="header-inner">
                    <NavList indexActive={indexActive} setIndexActive={setIndexActive} />
                </div>
                <CartImg sumCartCount={sumCartCount} />
            </div>
            <div className='header-sort_wrapper' >
                <Search />
                <SortPrice />
            </div>
        </header>
    )
}
export default Header