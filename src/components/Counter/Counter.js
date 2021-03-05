import './Counter.css'
export const Counter = ({count})=> {
    return (
        <div className="counter__container">
            <p className="counter__header">Steps</p>            
            <div className="counter">{count}</div>
        </div>
    )
}