import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../Redux/Slises/sortTypeSlice'
const Search = () => {
    const search = useSelector((state) => state.filter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <input className="header-input"
                type='text'
                placeholder="поиск..."
                value={search}
                onChange={(event) => dispatch(setSearchValue(event.target.value))} ></input>
        </div>
    )
}
export default Search