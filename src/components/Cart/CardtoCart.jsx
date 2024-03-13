
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, addItem, itemMinus, sumPriceItem, setButton } from '../../Redux/Slises/order'
import './CardtoCart.css'

const CardtoCart = ({ item }) => {
    const dispatch = useDispatch()
    const { button } = useSelector((state) => state.order)
    const handlerClose = () => {
        dispatch(removeItem(item.id))
        dispatch(sumPriceItem(item))
        dispatch(setButton(true))
    }
    const countPlus = () => {
        dispatch(addItem(item))
        dispatch(sumPriceItem(item))

    }
    const countMinus = () => {
        dispatch(itemMinus(item))
        dispatch(sumPriceItem(item))

    }
    return (
        <div className='products__card'>
            <img className='products__card-img' src={item.imgUrl} />
            <div>
                <h2 className='products__card-title'>{item.title}<span className='products__card-size'>{item.size}см</span></h2>
                <p className='products__card-description' >{item.additives}</p>
            </div>
            <div className="product__counter">
                <button className="product__count-minus" disabled={item.count === 1} onClick={countMinus}>-</button>
                <div className="product__counter-number" >{item.count}</div>
                <div className="product__count-plus" onClick={countPlus}>+</div>
            </div>
            <div className="product__price-inner">
                <div className=" product__price-card ">{item.price * item.count}</div>
                <span className=" product__currency-card">руб.</span>
            </div>
            <div className="close-button" onClick={handlerClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 43 43" fill="none">
                    <line x1="10.5176" y1="31.9363" x2="30.7566" y2="9.52154"
                        stroke="#ffd900" strokeWidth="4" />
                    <line x1="31.6061" y1="32.2923" x2="11.0406" y2="10.1767"
                        stroke="#ffd900" strokeWidth="4" />
                </svg>
            </div>
        </div>
    )
}
export default CardtoCart