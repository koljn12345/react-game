import './ScoreTable.css'
export const ScoreTable =({score}) => {
    return (
        <div className="scoreTable__container">
            <table className="scoreTable">
              <thead>
                <tr>
                    <th>Position</th>
                    <th>Quantity</th>
                    <th>Steps</th>
                </tr>
              </thead>
              <tbody>
                {score.map((el,i)=>{
                    if(i<10) 
                    return (
                        <tr className={el.active? 'active' : null} key={el.id}>
                            <td>{++i}</td>
                            <td>{el.quantity}</td>
                            <td>{el.steps}</td>
                        </tr>
                    )
                })}
              </tbody>
            </table>
        </div>
    )
}