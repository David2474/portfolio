const Redes = (props) => {

    const {cardStyle, content, event} = props;

    return(
        <button onClick={event} className={`bg-[#191919] cursor-pointer text-5xl border flex items-center justify-center m-2 col-span-1 rounded-lg p-2 ${cardStyle}`}>
            
                {content}
            
        </button>
    )
}

export default Redes