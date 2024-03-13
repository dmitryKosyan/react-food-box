import Button from '../../UI/Button'
import CardtoCart from './CardtoCart';
import React from 'react';
import { useSelector } from 'react-redux'
import './CartModal.css';
const CartModal = ({ setOpenModal }) => {
    const cartClose = React.useRef()

    const { totalSum, items } = useSelector((state) => state.order)

    React.useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (event.target === cartClose.current) {
                setOpenModal(false)
            }
        })
    }, [])
    return (
        <div ref={cartClose} className="cart-modal"  >
            <div className="cart-wrapper">
                {
                    items.length ?
                        <div className='cart-wrapper__cards' >
                            {
                                items.map((item, i) => <CardtoCart item={item} id={item.id} key={i} />)
                            }
                        </div> :
                        <div className='cart-empty' >корзина пуста : )</div>
                }
                <form >
                    {/* <input className='cart-input' type="text" name="name" placeholder="имя" />
                    <input className='cart-input' type="text" name="phone" placeholder="номер телефона" />
                    <textarea type="text" name="adress" placeholder="адресс доставки"></textarea> */}
                    <div className="payment-wrap">
                        <ul className="payment">
                            <li className="payment-method">
                                <label className="payment-input-lable">
                                    <input type="checkbox" name="payment"
                                        className="payment-product-add-checkbox" />
                                    <span className="payment-check-style"></span>
                                    оплата картой
                                </label>
                            </li>
                            <li className="payment-method">
                                <label className="payment-input-lable">
                                    <input type="checkbox" className="payment-product-add-checkbox" />
                                    <span className="payment-check-style"></span>
                                    оплата наличными
                                </label>
                            </li>
                        </ul>
                        <div className="total-price-all">
                            <h4 className="total-price-h4">к оплате:<span className="total-price-el">{totalSum.toFixed(2)} руб.</span></h4>
                        </div>
                        <div className="min-cost-order">
                            минимальная сумма заказа:<span>14.90 руб.</span>
                        </div>
                        <div className="price-sale">расчет акционных пицц рассчитывается оператором</div>
                        <Button>оформить заказ</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CartModal