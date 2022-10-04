import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './styles/index.scss'
// window.addEventListener('load', async () => {
//   try {
//     if('serviceWorker' in navigator) {
//       const reg = await  navigator.serviceWorker.register('./sw.js')
//       console.log('windows load',reg)
//      }
//      console.log('windows load after try')
//   } catch (e) {
//     console.log(e)
//   }
// })
const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
