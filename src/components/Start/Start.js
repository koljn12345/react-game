import { PlayButton } from "../PlayButton/PlayButton"

export const Start = ({onClick}) => {
    return (
        <div className="content">
            <h1>Welcome!</h1>
            <PlayButton onClick={onClick}/>
        </div>        
    )
}