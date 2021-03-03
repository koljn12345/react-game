import './Win.css'
export const Win = ({onClick,stepsCount})=>{
    return (
      <div className="content">
        <h1>Victory!</h1>
        <p>Steps {stepsCount}</p>
        <div className="btn" onClick={onClick}>Reset</div>
      </div>  
    ) 
}