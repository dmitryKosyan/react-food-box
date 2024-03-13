import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sortType: { name: 'рейтингу', property: '-rating' },
    value: ''
}

export const sortTypeSlice = createSlice({
    name: 'sortType',
    initialState,
    reducers: {

        changeSortType: (state, action) => {
            state.sortType.property = action.payload

        },
        setSearchValue: (state, action) => {
            state.value = action.payload
        }

    },

})


export const { changeSortType, setSearchValue } = sortTypeSlice.actions

export default sortTypeSlice.reducer