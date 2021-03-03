import { ResetButton } from '../ResetButton/ResetButton'
import './Win.css'
export const Win = ({onClick,stepsCount})=>{
    return (
      <div className="content">
        <h1>Victory!</h1>
        <p>Steps {stepsCount}</p>
        <ResetButton onClick={onClick} />
      </div>  
    ) 
}