import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit";
import {appReducer} from "./app-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
    app: appReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


