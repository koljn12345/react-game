import "./ResetButton.css";
import img from '../../assets/images/restart.svg'
export const ResetButton = ({onClick})=> {
    return (
        <img src={img} className="resetButton" alt="img" onClick={onClick} height="64"
        width="64"></img>
    )
}