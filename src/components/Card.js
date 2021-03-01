import {useState} from 'react'
import image from '../assets/images/s-1.jpg'
export const Card = ({id})=> {    
    const [isOpen, setIsOpen]= useState(false)
    const name= isOpen ? 'card open': 'card';
    const handleClick = ()=> {
        setIsOpen(true)
    }

    return (        
        <div className={name} onClick={handleClick} >
            {isOpen ? (<img src={image} alt='s'></img>): null}
        </div>
    )
}