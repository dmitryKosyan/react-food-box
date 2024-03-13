import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAdditives, clearAdditives } from '../../Redux/Slises/order'

import './Additives.css'

const Additives = ({ additivesProductsPrice, priceItem, additivesData, items }) => {

    const dispatch = useDispatch()

    const [checkboxes, setCheckboxes] = React.useState([]);
    useEffect(() => {
        items ? setCheckboxes([]) : setCheckboxes([])
    }, [items]);

    const changeCheckboxes = (id, item, checked) => {

        setCheckboxes(
            checkboxes.includes(id)
                ? checkboxes.filter((el) => el !== id)
                : [...checkboxes, id]
        );

        if (checkboxes.includes(id)) {
            additivesProductsPrice(priceItem - item.price)
            dispatch(clearAdditives(item.name))
        } else {
            additivesProductsPrice(priceItem + item.price)
            dispatch(getAdditives(item.name))
        }
    };

    return (
        <div className="modal__inner" >
            <ul className="modal-ingridient">
                {
                    additivesData.map((item, index, id) => <li className="product-add-somathing" key={index} >
                        <label className="input-lable">
                            <input className="product-add-checkbox"
                                type="checkbox"
                                name={item.name}
                                id={item.id}
                                onChange={() => changeCheckboxes(item.id, item)}
                                checked={checkboxes.includes(item.id)}
                            />
                            <span className="check-style"></span>
                        </label>
                        <div className='product-add_title'>{item.name}</div>
                        <div className='product-add_title'>{item.price}</div>
                    </li >)
                }
            </ul >
        </div>
    )
}
export default Additives