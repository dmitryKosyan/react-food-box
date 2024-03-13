import CardProducts from '../components/Card/CardProducts'
import * as Api from '../Api'
import React from 'react';

const Drinks = () => {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {

        const fetchDrinks = async () => {
            try {
                const res = await Api.getDrinks()
                setItems(res)

            } catch (error) {
                console.error(error);
            }
        }
        fetchDrinks()
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='container'>

            <div className='product__container'>
                {
                    items.map((item, i) =>
                        <CardProducts {...item} key={i} />)
                }
            </div>
        </div>
    )
}
export default Drinks