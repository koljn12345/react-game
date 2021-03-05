import "./PlayButton.css";
import img from '../../assets/images/play.svg'
export const PlayButton = ({onClick})=> {
    return (        
        <img src={img} className="playButton" alt="img" onClick={onClick} height="128"
        width="128"></img>
    )
}