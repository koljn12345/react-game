export const Card = ({handleClickCards, isOpen, id,img,settings})=> {  
    let classN= isOpen? 'card open': 'card';
    classN+= ' '+ settings.bgCard.current;
    console.log(classN)
    return (        
        <div className={classN} onClick={handleClickCards} >
            {/* <img src={img.src} alt='img'></img> */}
            {isOpen ? (<img src={img.src} alt='img'></img>): null
            }
        </div>
    )
}