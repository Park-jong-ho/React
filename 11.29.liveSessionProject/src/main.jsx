import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './MiniProject1/redux_modules/RootReducer';
import { Provider } from "react-redux"

const store = configureStore({
  reducer: rootReducer
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

