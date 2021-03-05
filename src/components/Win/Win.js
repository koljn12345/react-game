import { ResetButton } from '../ResetButton/ResetButton'
import { ScoreTable } from '../ScoreTable/ScoreTable'
import './Win.css'
export const Win = ({onClick,stepsCount, quantity, scoreTable})=>{
    return (
      <div className="content">
        <h1>Victory!</h1>
        <p className="win__text">Steps <span>{stepsCount}</span></p>
        <ScoreTable score={scoreTable}/>
        <ResetButton onClick={onClick} />
      </div>  
    ) 
}