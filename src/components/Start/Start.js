export const Start = ({onClick}) => {
    return (
        <div className="content">
            <h1>Welcome!</h1>
            <div className="btn" onClick={onClick}>Play</div>
        </div>        
    )
}