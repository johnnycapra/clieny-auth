import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './components/App';
import Root from './Root';
import reducers from './reducers';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';






const container = document.getElementById('root');
const root = createRoot(container);


  
root.render(
    <Root>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<Welcome/>} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/feature" element={<Feature />} />
                    <Route path="/signout" element={<Signout />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </App>
        </BrowserRouter>
    </Root>
)
