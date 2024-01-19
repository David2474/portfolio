

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
        <div className="granulated-bg s col-span-2 row-span-2 rounded-lg m-2">
            <div>
                <p className="text-3xl text-center my-6">
                    Tecnologias 
                </p>
            </div>

            <div className="flex justify-center mx-4 flex-wrap">
                {tecnologias.map((tecnologia) => (
                    <li key={tecnologia.id} className="h-12 my-3 list-none mx-3">
                        <img 
                            className="w-14 h-14" 
                            src={tecnologia.url} alt={tecnologia.nombre} 
                        />
                    </li>
                ))}
            </div>
        </div>
    )
}


export default Tecnologias