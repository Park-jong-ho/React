import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./redux_practice/reduxbasic"
import rootReducer from './reduxModules/RootReducer.jsx'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//스토어 등록
const store = configureStore({
    reducer: rootReducer,
});

console.log("스토어 state = ", store.getState());

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
