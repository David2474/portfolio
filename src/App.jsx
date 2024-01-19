// import { useState } from 'react'

// COMPONENTES
import Tecnologias from "./components/bentoGrid/Tecnologias.jsx";
import Name from "./components/bentoGrid/Name.jsx";
import Icons from "./components/bentoGrid/Icons.jsx";
import Hora from "./components/bentoGrid/Hora.jsx";
import Description from "./components/aboutMe/Description.jsx";
import Button from "./components/aboutMe/Button.jsx";

// // SVG´S
import GitHub from "./icons/GitHub.jsx";
import Linkedln from "./icons/Linkedln.jsx";
import Quetzalt from "./icons/Quetzalt.jsx";
import Bandera from "./components/bentoGrid/Bandera.jsx";

// import Img from "./components/aboutMe/Img.jsx";
import ContainCard from "./components/proyects/ContainCard.jsx";

function App() {
  return (
    <>
      <section className="w-11/12 border grid grid-rows-3 grid-cols-4 p-3  border-blue-800 h-screen">
        <Name />

        <Tecnologias />

        <Icons cardStyle={`bg-blue-400 row-span-2`} icon={<GitHub />} />

        <Icons cardStyle={`bg-gray-300 `} icon={<Linkedln />}></Icons>
        <Hora />
        <Bandera icon={<Quetzalt />} />
      </section>

      <section className="border-red-500 border-[3px] w-11/12">
        <div className="flex border bg-blue-900 justify-between text-white">
          <div className="flex flex-col justify-center w-3/5 h-[440px] px-10">
            <h1 className="text-3xl mb-4">Sobre mi</h1>
            <Description />
            <div className="self-end mx-5">
              <Button />
            </div>
          </div>
          <div className="w-2/5 h-[400px]   flex items-center justify-center text-black">
            {/* <Img></Img> */}
            <Quetzalt />
          </div>
        </div>

        <div className=" bg-blue-500 border-t-2 flex flex-col border-black py-10 text-black">
          <h2 className="text-center text-3xl py-6">Proyectos</h2>
          <ContainCard/>
        </div>

        {/* CONTACT SECTION */}

        <div className="bg-red-600 text-black">
          <p>Contacto</p>
          
        </div>

      </section>
    </>
  );
}

export default App;
