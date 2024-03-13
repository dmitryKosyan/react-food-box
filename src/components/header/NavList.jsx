import React from 'react'
import { Link } from 'react-router-dom';

const NavList = ({ indexActive, setIndexActive }) => {
    const navListItems = ['главная', 'пицца', 'закуски', 'напитки', 'кофе', "десерты", 'соусы']

    return (
        <nav className="header-nav">
            <ul className="header-list">

                {
                    navListItems.map((item, i) =>
                        <li className="header-list__item" key={item} onClick={() => setIndexActive(i)}>
                            <Link to={item === 'главная' ? '/' : item} className={indexActive === i ? 'active' : 'header-link'}

                            >{item}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}
export default NavList