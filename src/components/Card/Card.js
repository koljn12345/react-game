export const Card = ({handleClickCards, isOpen, id,img})=> {  
    return (        
        <div className={isOpen ? 'card open': 'card'} onClick={handleClickCards} >
            {/* <img src={img.src} alt='img'></img> */}
            {isOpen ? (<img src={img.src} alt='img'></img>): null
            }
        </div>
    )
}