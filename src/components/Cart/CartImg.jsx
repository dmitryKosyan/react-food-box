import React from "react"
import { useSelector } from 'react-redux'

import CartModal from '../Cart/CartModal'
const CartImg = () => {

    const [openModal, setOpenModal] = React.useState(false)
    const { items } = useSelector((state) => state.order)
    return (
        <div className="header__basket-wrap" onClick={() => setOpenModal(true)}>
            <img className="header__bascet-img" src='./images/cart.svg' alt="logo" />
            <div className="header__basket-text ">Корзина</div>
            <div className="header__basket-count ">{items.length}</div>
            {openModal ? <CartModal setOpenModal={setOpenModal} /> : ''}
        </div>
    )
}
export default CartImg