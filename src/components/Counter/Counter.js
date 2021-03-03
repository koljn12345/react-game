export const Counter = ({seconds})=> {
    console.log(1)
    return (
        <p>{seconds<0? 0 : seconds}</p>
    )
}