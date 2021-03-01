import './Board.css'
import { Card } from './Card';
const mass= [0,4,5,6,7,1,0,1,5,4,7,6];

export const  Board = ()=> {
    return (
        <div className="board">
            {mass.map(el=> (
                <Card id={el} key={Math.random(10)} />
            ))}
        </div>
    )
}