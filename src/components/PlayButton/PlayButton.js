import "./PlayButton.css";
import img from '../../assets/images/play.svg'
export const PlayButton = ({onClick})=> {
    return (
        <img src={img} className="playButton" alt="img" onClick={onClick} height="64"
        width="64"></img>
    )
}