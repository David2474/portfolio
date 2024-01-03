// import { useState } from 'react'

import Tecnologias from './components/bentoGrid/Tecnologias.jsx'
import Name from './components/bentoGrid/Name.jsx'
import Icons from './components/bentoGrid/Icons.jsx'
import Redes from './components/bentoGrid/Redes.jsx'
// import Redes from './components/Redes.jsx'

// // SVG´S
import GitHub from './icons/GitHub.jsx'
import Linkedln from './icons/Linkedln.jsx'
import Hora from './components/Hora.jsx'

function App() {

  return (
    <> 

      <div
        className='w-11/12  border grid grid-rows-3 grid-cols-4 p-3  border-blue-800 h-screen'
      >
        <Name/>


        <Tecnologias/>

        <Icons
          cardStyle={`bg-blue-400 row-span-2`}
          icon={<GitHub/>}
        />

        <Icons
          cardStyle={`bg-gray-300`}
          icon={<Linkedln/>}
        >
        </Icons>

        <Redes
          cardStyle="col-span-2 border-yellow-300"
          content="Proyectos"
        />

        <Hora/>
      </div>

      <div 
        className='border-blue-500 border-[3px] h-5 w-11/12'
      >

      </div>

    </>
  )}

export default App
