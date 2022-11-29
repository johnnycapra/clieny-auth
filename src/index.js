import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './components/App';
import reducers from './reducers';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';


const container = document.getElementById('root');
const root = createRoot(container);




root.render(
    <Provider store={configureStore({reducer: reducers, middlewares:[reduxThunk] })}>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<Welcome/>} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </App>
        </BrowserRouter>
    </Provider>
)
