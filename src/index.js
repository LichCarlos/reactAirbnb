import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import {Provider} from "react-redux";
import { ThemeProvider } from 'styled-components';



import App from '@/App';
import "./assets/css/index.less";
import "normalize.css";
import store from './store';
import theme from '@/assets/theme/index.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <HashRouter fallback="">
                    <App />
                </HashRouter>
            </ThemeProvider>
        </Provider>
    </Suspense>

    
);
