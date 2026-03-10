import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//html id=root build react application.
createRoot(document.getElementById('root')).render(
    <App />,
)
