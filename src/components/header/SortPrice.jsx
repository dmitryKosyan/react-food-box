import React from 'react'
import { useDispatch } from 'react-redux'
import { changeSortType } from '../../Redux/Slises/sortTypeSlice'
import './SortPrice.css'
import { togglePage } from '../../Redux/Slises/Pagination'

const SortPrice = () => {

    const sortList = [{ name: 'возрастанию', property: '-price' },
    { name: 'убыванию', property: 'price' },
    { name: 'рейтингу', property: 'rating' }]

    const [sortElem, setSortElem] = React.useState('выбрать')
    const [openSortMenu, setOpenSortMenu] = React.useState(false)

    const dispatch = useDispatch()



    const sort = (sort) => {
        setSortElem(sort.name)
        dispatch(changeSortType(sort.property))
        setOpenSortMenu(false)
        dispatch(togglePage(1))
    }


    return (
        <div className="sort-block" onClick={() => setOpenSortMenu(!openSortMenu)}>
            <div className="sort-arrow__up" >
                <svg className="sort__link-up" width="12" height="6">
                    < path d="M14 0.5L7.5 7L1 0.5" stroke="#e15817fa" fill='#e15817fa'></path>
                </svg >
            </div>
            <p className="sort-text"  >сортировать по : <span className='sort-list__active'>{sortElem}</span></p>

            {openSortMenu &&
                <ul className='sort-wrapper'>
                    {
                        sortList.map((obj) =>
                            <li className='sort-list'
                                key={obj.name} onClick={() => sort(obj)} >{obj.name}</li>
                        )
                    }
                </ul >
            }
        </div>
    )
}
export default SortPrice