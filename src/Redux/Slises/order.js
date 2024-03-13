import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    additivesItems: [],
    priceArrItems: [],
    totalSum: 0,
    button: true,



}

export const order = createSlice({
    name: 'oreder',
    initialState,
    reducers: {


        addItem(state, action) {

            const findItem = state.items.find((item) => item.id === action.payload.id)
            if (findItem) {
                findItem.count++

            }

            else {

                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }

        },

        removeItem(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        getAdditives(state, action) {
            state.additivesItems.push(action.payload)

        },
        deletAdditives(state,) {
            state.additivesItems = []

        },
        clearAdditives(state, action) {
            state.findAdditives = state.additivesItems.find((item) => item === action.payload)
            if (state.findAdditives) {
                state.additivesItems = state.additivesItems.filter((item) => item !== state.findAdditives)

            }
        },

        sumPriceItem(state, action) {
            state.totalSum = state.items.reduce((sum, item) => {
                return item.price * item.count + sum
            }, 0)

        },
        itemMinus(state, action) {
            const findItem = state.items.find((item) => item.id === action.payload.id)
            if (findItem) {
                findItem.count--
            }

        },
        setButton(state, action) {
            state.button = action.payload
        }



    },

})


export const { addItem, getAdditives, deletAdditives, removeItem,
    clearAdditives, sumPriceItem, itemMinus, addItemSize, setButton } = order.actions

export default order.reducer