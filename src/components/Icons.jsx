const Icons = (props) => {

    const {icon, cardStyle} = props;

    return(
        <a href=""
            className={`bg-[#191919] : cursor-pointer col-span-1 flex justify-center items-center m-2 rounded-lg ${cardStyle}`}>
            
                {icon}
           
        </a>
    )
}

export default Icons