import ReactDOM from 'react-dom/client'


import App from './App.jsx'
import './index.css'

// SVG´S


ReactDOM.createRoot(document.getElementById('root')).render(
  <section 
  className='w-5/6 border grid grid-rows-3 grid-cols-4 p-3  border-blue-800'>

    <App />

  </section>,
)
