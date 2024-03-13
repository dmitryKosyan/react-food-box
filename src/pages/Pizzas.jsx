import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { togglePage } from '../Redux/Slises/Pagination'
import CardProducts from '../components/Card/CardProducts'
import * as Api from '../Api'
import Skeleton from '../UI/Skeleton';

import PaginationPages from '../components/PaginationPages';


const Pizzas = () => {

    const [items, setItems] = React.useState([])

    const [isLoading, setIsloading] = React.useState(true)
    const dispatch = useDispatch()
    const sortBy = useSelector((state) => state.filter.sortType.property)
    const searchValue = useSelector((state) => state.filter.value)
    const [currentPage, setCurrentPage] = React.useState(1); // Номер конкретной страницы в пагинации

    // Количество элементов на странице
    const [totalPages, setTotalPages] = React.useState(1);

    React.useEffect(() => {
        setIsloading(true)
        const fetchItems = async () => {
            try {
                const limit = 4;
                const res = await Api.getItems({
                    sortBy,
                    ...(searchValue && { title: searchValue + '*' }),
                    page: currentPage,
                    limit,
                })
                setItems(res.items)
                setTotalPages(res.meta.total_pages);

            } catch (error) {
                console.error(error);
            }
        }
        fetchItems()

        setIsloading(false)
        window.scrollTo(0, 0)
    }, [sortBy, searchValue, currentPage])
    const handleClickPage = (page) => {
        setCurrentPage(page)
        dispatch(togglePage(page))
    }


    return (
        <div className='container'>
            <div className='product__container'>
                {isLoading ?
                    [...Array(4)].map((_, i) => <Skeleton key={i} />)
                    :
                    items.map((item, i) => <CardProducts {...item} key={i} />)
                }

            </div>
            <PaginationPages currentPage={handleClickPage} totalPages={totalPages} />
        </div>
    )
}
export default Pizzas
