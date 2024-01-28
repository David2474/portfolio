import { useEffect, useState } from "react";

export default function Hora() {

    const [horaActual, setHoraActual] = useState('');

    useEffect(() => {
      const obtenerHoraActual = () => {
        const today = new Date();
        const hours = today.getHours().toString().padStart(2, '0');
        const minutes = today.getMinutes().toString().padStart(2, '0');
        setHoraActual(`${hours}:${minutes}`);
      };
  
      const intervalId = setInterval(obtenerHoraActual, 1000);
  
      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className="bg-[#2E2E2E] text-6xl col-span-3 sm:col-span-2 cursor-pointer flex justify-center items-center m-2 rounded-lg">
        {horaActual}
    </div>
  )
}
