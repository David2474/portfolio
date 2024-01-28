const Icons = (props) => {

    const {icon, cardStyle} = props;

    return(
        <a href=""
            className={`bg-[#2E2E2E] hover:brightness-50 brightness-100 cursor-pointer col-span-1 flex justify-center items-center m-2 rounded-lg ${cardStyle}`}> 
                {icon} 
        </a>
    )
}

export default Icons