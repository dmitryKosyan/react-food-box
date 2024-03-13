import { configureStore } from '@reduxjs/toolkit'
import sortTypeSlice from './Slises/sortTypeSlice'
import order from './Slises/order'
import pagination from './Slises/Pagination'

export const store = configureStore({
    reducer: {
        filter: sortTypeSlice,
        order,
        pagination,


    },
})