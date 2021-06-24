import { combineReducers, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector, Provider } from "react-redux";
import authReducer from "./auth/reducer";
import React from "react";
import shiftReducer from "./shift/reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnchacers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : undefined

const rootReducer = combineReducers({
    auth: authReducer,
    shift: shiftReducer
})

const store = configureStore({
    reducer: rootReducer,
    enhancers: composeEnchacers
})

export const getStore = () => store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

const StoreProvider: React.FC = ({ children }) => {
    return (
        <Provider store={getStore()}>
            {children}
        </Provider>
    )
}

export default StoreProvider