import { useEffect, useState } from 'react';
import './Board.css'
import { Card } from '../Card/Card';
import { getInitData } from '../../util/util';

export const  Board = ({data, handleIsWin, handleStepsCount, settings,changePropsSounds})=> {
    const [cards, setCards] = useState(getInitData(data));
    const [openFirstCard, setOpenFirstCard]=useState(null);
    const [openSecondCard, setOpenSecondCard]=useState(null);
    const [countSuccesEqual, setCountSuccesEqual] =useState(0);

    const toogleIsOpenCard=(e,flag) => {
        changePropsSounds(true,false,false);
        setCards( prev=> prev.map(el=>{
            if(el.id == e.id) el.isOpen=flag;
            return el
        }))
    }

    const toogleIsSolutionCard=(e) => {
        setCards( prev=> prev.map(el=>{
            if(el.id == e.id) el.isSolution=true;
            return el
        }))
    }

    const onSuccesEqual = ()=> {  
        changePropsSounds(false,true,false);
        toogleIsSolutionCard(openFirstCard);
        toogleIsSolutionCard(openSecondCard);
        setOpenFirstCard(null);
        setOpenSecondCard(null);
        setCountSuccesEqual(prev=> ++prev);
          
    }
    const onFailEqual = ()=> {
        changePropsSounds(false,false,true);
        let f=openFirstCard;
        let s=openSecondCard; 
        setOpenFirstCard(null);
        setOpenSecondCard(null);   
        setTimeout(()=>{
            toogleIsOpenCard(f,false);
            toogleIsOpenCard(s,false);
        },700)
        
    }
    const checkEqual = ()=> {
        if(openFirstCard.code===openSecondCard.code) onSuccesEqual()
        else onFailEqual()
    }

    useEffect(()=>{
        setTimeout(()=>{
            const newCards=cards.map(el=>{
                el.isOpen=false;
                return el
            });
            setCards(newCards);
            
        },2000)        
    },[])

    useEffect(()=> {
        if(openFirstCard && openSecondCard) 
            {
                checkEqual();
                handleStepsCount();
            }
    },[openFirstCard,openSecondCard])

    useEffect(()=> {
        if(cards.length/2 == countSuccesEqual) handleIsWin();
    },[countSuccesEqual])

    const handleClickCards = (e) => {
        if(e.isOpen) return null
        
        toogleIsOpenCard(e,true);

       if(!openFirstCard) setOpenFirstCard(e);
       else if(!openSecondCard)  setOpenSecondCard(e);
         
    }
    const classN=`board board-${settings.quantity.current}`;
    return (
        
        <div className={classN}>
            {cards.map(el=> (
                <Card key={el.id} handleClickCards={()=>handleClickCards(el)} settings={settings} {...el} />
            ))}
        </div>
    )
}