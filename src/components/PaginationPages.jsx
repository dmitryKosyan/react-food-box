import React from 'react'
import './PaginationPages.css'
const PaginationPages = ({ totalPages, currentPage }) => {
    const [indexActive, setIndexActive] = React.useState(0)
    const activeIndex = (i) => {
        setIndexActive(i)
        currentPage(i + 1)
    }
    return (
        <div className='page-wrap' >
            <ul className='page-List'>
                {
                    [...Array(totalPages)].map((_, i) => <li onClick={() => activeIndex(i)} key={i} className={indexActive === i ? 'active-page' : 'pages'}>{i + 1}</li>)


                }
            </ul>
        </div>


    )
}
export default PaginationPages