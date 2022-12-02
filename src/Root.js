import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from 'redux-persist/integration/react'



export default ({ children, initialState }) => {
    const persistConfig = {
        key: "root",
        storage
    };
    
    const persistedReducer = persistReducer(persistConfig, reducers);

    const store = createStore(
        persistedReducer, 
        initialState,
        applyMiddleware(reduxThunk))

    const persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            {children}
            </PersistGate>
        </Provider>
    )
}