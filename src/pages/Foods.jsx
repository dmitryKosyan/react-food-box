
import React from "react"
import * as Api from '../Api'
import CardProducts from "../components/Card/CardProducts"
const Foods = () => {

    const [items, setItems] = React.useState([])

    React.useEffect(() => {

        const fetchFoods = async () => {
            try {
                const res = await Api.getFoods()
                setItems(res)

            } catch (error) {
                console.error(error);
            }
        }
        fetchFoods()
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='container'>

            <div className='product__container'>
                {
                    items.map((item, i) =>
                        <CardProducts  {...item} key={i} />
                    )
                }
            </div>
        </div>

    )
}
export default Foods