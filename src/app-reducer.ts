import {createSlice} from "@reduxjs/toolkit";

export type Elem = { id: number }

const appInitialState: Array<Elem> = []

const slice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {
        addElem(state) {
            const newElem = {id: state.length + 1}
            state.unshift(newElem)
        },
        removeLastElem(state) {
            state.pop()
        }
    }
})
export const appReducer = slice.reducer
export const {addElem, removeLastElem} = slice.actions
