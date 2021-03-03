import './CloseButton.css'
import img from '../../assets/images/close.svg'
export const CloseButton = ({onClick})=> {
    return (
        <img src={img} className="closeButton" alt="img" onClick={onClick} height="32"
        width="32"></img>
    )
}