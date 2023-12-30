import { useState } from 'react'

import Description from './components/description.jsx'
import Icons from './components/Icons.jsx'
import Name from './components/Name.jsx'
import Redes from './components/Redes.jsx'

// SVG´S
import GitHub from './icons/GitHub.jsx'
import Linkedln from './icons/Linkedln.jsx'

function App() {

  const [component, setComponent] = useState('Name');

  return (
    <>  

      <Name/>

      <Description/>

      <Icons
        cardStyle={`bg-blue-400 row-span-2`}
        icon={<GitHub/>}
      />

      <Icons
        cardStyle={`bg-gray-300`}
        icon={<Linkedln/>}
      />

      <Redes
        cardStyle="col-span-2 border-yellow-300"
        content="Proyectos"
      />

      <Redes/>
    </>
  )
}

export default App
