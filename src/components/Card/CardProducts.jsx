
import React from "react"
import { useInView } from 'react-intersection-observer'
import Skeleton from '../../UI/Skeleton'
import CardOrderPizza from "./CardOrderPizza"
import { useDispatch, useSelector } from 'react-redux'
import { addItem, deletAdditives, sumPriceItem, setButton } from '../../Redux/Slises/order'


import Button from "../../UI/Button"

import './CardProducts.css'

const CardProducts = ({ imgUrl, title, discription, size, additives, priceArr, price, id, rating }) => {
    const { button } = useSelector((state) => state.order)
    const dispatch = useDispatch()
    React.useEffect(() => {
        button ? setButtonText('выбрать') : setButtonText('выбрано')
    }, [button])

    //lazy loading pizzas
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    })
    const [pizzaBlock, setPizzBlock] = React.useState({})
    const [options, setOptions] = React.useState(false)
    const [buttonText, setButtonText] = React.useState('выбрать')
    const cardOrderPizza = (id) => {
        setPizzBlock({
            id,
            imgUrl,
            title,
            discription,
            size,
            additives,
            priceArr,
            price
        })
        setOptions(true)
        //setButtonText('выбрано')
        dispatch(setButton(false))
    }
    const closeCardPopup = (params) => {
        setOptions(params)
    }

    return (
        <>
            <div ref={ref} className="product__card" >
                {
                    inView ? <img className="product__img" src={imgUrl} alt="pizza" /> : <Skeleton />
                }

                <div className="product__content">
                    <div className="raiting">
                        {
                            [...Array(10)].map((el, i) => <svg key={i} width="15" height="15" viewBox="0 0 25 23" fill={i + 1 <= rating ? "#f1e107" : "none"} xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 1.61804L14.8309 8.7918L14.9432 9.13729H15.3064H22.8494L16.747 13.5709L16.4531 13.7844L16.5654 14.1299L18.8963 21.3037L12.7939 16.8701L12.5 16.6565L12.2061 16.8701L6.10374 21.3037L8.43464 14.1299L8.54689 13.7844L8.253 13.5709L2.15064 9.13729H9.69357H10.0568L10.1691 8.7918L12.5 1.61804Z" stroke="#FFE70C" />
                            </svg>)
                        }
                    </div>

                    <h3 className="product__title">{title}</h3>
                </div>
                <span className="discription">{discription} </span>
                <div className="product__single-card">
                    <div className="product__price-inner">
                        <div className=" product__price-card ">{price}</div>
                        <span className=" product__currency-card">руб.</span>
                    </div>
                    <div className="product__counter" onClick={() => cardOrderPizza(id)} >
                        <Button >{buttonText}</Button>
                    </div>
                </div>
            </div >
            {
                options
                    ? <CardOrderPizza imgUrl={pizzaBlock.imgUrl
                    }
                        title={pizzaBlock.title}
                        discription={pizzaBlock.discription}
                        size={pizzaBlock.size}
                        additives={pizzaBlock.additives}
                        priceArr={pizzaBlock.priceArr}
                        price={pizzaBlock.price}
                        setOptions={closeCardPopup}
                        id={pizzaBlock.id}
                    />
                    : ''
            }

        </>


    )
}
export default CardProducts