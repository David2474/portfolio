// import { useState } from 'react'

// COMPONENTES
import Tecnologias from "./components/bentoGrid/Tecnologias.jsx";
import Name from "./components/bentoGrid/Name.jsx";
import Icons from "./components/bentoGrid/Icons.jsx";
import Hora from "./components/bentoGrid/Hora.jsx";


// // SVG´S
import GitHub from "./icons/GitHub.jsx";
import Linkedln from "./icons/Linkedln.jsx";
import Quetzalt from "./icons/Quetzalt.jsx";
import Bandera from "./components/bentoGrid/Bandera.jsx";

// import Img from "./components/aboutMe/Img.jsx";
import ContainCard from "./components/proyects/ContainCard.jsx";
import ContAboutMe from "./components/aboutMe/ContAboutMe.jsx";
import ContactForm from "./components/contacMe/ContactForm.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <>
      <section className="w-12/12 sm:w-11/12 text-[#7E00DE] grid grid-rows-3 grid-cols-4 p-3 h-screen">
        <Name />

        <Tecnologias />

        <Icons cardStyle={`bg-[#2E2E2E] row-span-1 sm:row-span-2`} icon={<GitHub />} />

        <Icons cardStyle={`bg-[#2E2E2E]`} icon={<Linkedln />}></Icons>
        <Hora />
        <Bandera icon={<Quetzalt />} />
      </section>

      <section className="w-12/12 sm:w-11/12">
        <div className="flex justify-between my-10 items-center">
            <ContAboutMe/>
        </div>

        <div className=" flex flex-col py-10 mt-20">
          <h2 className="text-center text-3xl py-6 text-[#7E00DE]">Proyectos</h2>
          <ContainCard/>
        </div>

        {/* CONTACT SECTION */}

        <div className="sm:py-10">
          <p className="text-center text-[#7E00DE] mb-8 text-3xl">Contacto</p>
         <ContactForm/>
        </div>


        <Footer></Footer>
      </section>
    </>
  );
}

export default App;
