import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AlertProvider } from './context/AlertContext'
import { Router } from 'react-router-dom'
import { createBrowserHistory, History } from 'history'

export const history: History = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
})

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <AlertProvider>
        <App />
      </AlertProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
