

const Tecnologias  = () =>{

    const tecnologias = [
        { nombre: 'Base de datos', url: 'icons/baseDatos.png' },
        { nombre: 'React', url: 'icons/react.svg' },
        { nombre: 'Git', url: 'icons/git.png' },
        { nombre: 'Git', url: 'icons/css-3.png' },
        { nombre: 'Html', url: 'icons/html.png' },
        { nombre: 'Adobe', url: 'icons/adobe.png' },
        { nombre: 'Linux', url: 'icons/linux.png' },
        { nombre: 'Js', url: 'icons/javascript.png' },
        { nombre: 'windows', url: 'icons/windows.png' },
      ];

    return(
        <div className="bg-[#2E2E2E] col-span-3 row-span-2 sm:col-span-2 sm:row-span-2 rounded-lg m-2">
            <div>
                <p className="text-3xl text-center my-6">
                    Tecnologias 
                </p>
            </div>

            <div className="flex justify-center mx-4 flex-wrap">
                {tecnologias.map((tecnologia) => (
                    <li key={tecnologia.id} className="sm:h-12 mx-1 my-1 sm:my-3 list-none sm:mx-3">
                        <img 
                            className="w-10 h-10 sm:w-14 sm:h-14" 
                            src={tecnologia.url} alt={tecnologia.nombre} 
                        />
                    </li>
                ))}
            </div>
        </div>
    )
}


export default Tecnologias