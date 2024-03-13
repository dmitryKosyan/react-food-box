
import React from 'react'
import Additives from './Additives'
import Button from '../../UI/Button'

import { useDispatch, useSelector } from 'react-redux'
import { addItem, deletAdditives, sumPriceItem } from '../../Redux/Slises/order'
import './CardOrderPizza.css'



const CardOrderPizza = ({ imgUrl, title, discription, size, additives, priceArr, id, setOptions }) => {

    const { additivesItems } = useSelector((state) => state.order)
    const dispatch = useDispatch()
    const [priceItem, setChangePrice] = React.useState(priceArr[0])//state change of price
    const [sizeProductIndex, setSizeProductIndex] = React.useState(0) //изменение размера пиццы

    const [changeSizeImg, setChangeSizeImg] = React.useState(0)
    const cardOrderRef = React.useRef()
    const [items, setItems] = React.useState(false)


    React.useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (event.target === cardOrderRef.current) {
                setOptions(false)
            }
        })
    }, [])


    const changeSize = (i) => {
        setSizeProductIndex(i)
        setChangePrice(priceArr[i])
        setChangeSizeImg((i + 1) * 20)
        setItems(!items)

        dispatch(deletAdditives(additivesItems))
    }

    const additivesProductsPrice = (value) => {
        setChangePrice(+(value).toFixed(2))
    }
    const handelOrder = (id) => {
        const item = {
            id,
            imgUrl,
            title,
            discription,
            size: size[sizeProductIndex],
            additives: additivesItems.join(' , '),
            price: priceItem,
            count: 1,

        }
        dispatch(addItem(item))
        dispatch(deletAdditives(additivesItems))
        dispatch(sumPriceItem(item))
        setOptions(false)


    }

    return (
        <div ref={cardOrderRef} className="card-order__modal">
            <div className="card-order__wrapper">
                <div className="card-order__block">
                    <div className='card-img__wrapper'>
                        <img className="card-order__img" src={imgUrl} alt="pizza" style={{ width: 250 + changeSizeImg + 'px' }} />

                    </div>
                    <div className="card-order__inner">
                        <div className="card-order__content">
                            <h3 className="card-order__title">{title}</h3>
                        </div>
                        <div className="product-discription__block">
                            <span className="discription">{discription}</span>
                        </div>
                        <div className="product__wrapper">
                            <ul className="product__item-wrapper">
                                {
                                    size.map((el, i) =>
                                        <li className={sizeProductIndex === i ? 'selected' : 'product__variable-item'}
                                            onClick={() => changeSize(i, el)}
                                            key={el} >{el}см</li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="product__add-ingridient">
                            <div className="product__ingridient-container">

                                <Additives priceItem={priceItem}
                                    additivesProductsPrice={additivesProductsPrice}
                                    additivesData={additives}
                                    setItems={setItems}
                                    items={items}
                                />

                            </div>
                        </div>
                        <div className="product__single-variation">
                            <div className='product__price-wrap'>
                                <div className=" product__price ">{priceItem}</div>
                                <span className=" product__currency">руб.</span>
                            </div>
                            <div onClick={() => handelOrder(id)} >
                                <Button  >в корзину</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardOrderPizza