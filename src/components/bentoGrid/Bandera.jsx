const Bandera = (props) => {

  const {icon, cardStyle} = props;

  return (
    <div
      className={`bg-[#2E2E2E] cursor-pointer col-span-1 flex justify-center items-center m-2 rounded-lg ${cardStyle}`}
    >
      {icon}
    </div>
  )
}

export default Bandera