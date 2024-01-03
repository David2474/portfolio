import ReactDOM from 'react-dom/client'


import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// SVG´S


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <section 
    className='w-5/6 items-center flex justify-center mx-auto flex-col'>

      <App />

    </section>
  </BrowserRouter>
)
