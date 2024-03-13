import CardProducts from '../components/Card/CardProducts'
import * as Api from '../Api'
import React from 'react';

const Souses = () => {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {

        const fetchSouses = async () => {
            try {
                const res = await Api.getSouses()
                setItems(res)

            } catch (error) {
                console.error(error);
            }
        }
        fetchSouses()
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
export default Souses