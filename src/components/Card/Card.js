export const Card = ({handleClickCards, isOpen, id,img,settings})=> {  
    let classN= isOpen? 'card open': 'card';
    classN+= ' '+ settings.bgCard.current;
    return (        
        <div className={classN} onClick={handleClickCards} >
            {isOpen ? (<img src={img.src} alt='img'></img>): null
            }
        </div>
    )
}