import { useEffect, useState } from 'react';
import './App.css';
import { Board } from './components/Board/Board';
import { Counter } from './components/Counter/Counter';
import { Start } from './components/Start/Start';
import { Win } from './components/Win/Win';
import { getData } from './util/util';

function App() {
  const [isLoading, setIsLoading]= useState(true);
  const [data,setData]= useState([]);  
  const [startGame, setStartGame] = useState(false)
  const [seconds, setSeconds]= useState(0)
  const [isWin, setIsWin]= useState(false)
  const [timer, setTimer] = useState(null)
  const [reset, setReset] = useState(false)
  
  const handleIsWin = () =>{
    setIsWin(true);
    //setStartGame(false);
    resetTimer();
  }

  useEffect(()=> {   
    newGame()
  },[isWin,reset])

  const newGame=()=> {    
    getData().then(res=>{setIsLoading(false); setData(res); setReset(false)})
  }


  const tick=()=> {
    setSeconds(sec=> sec+1)
  }
  useEffect (()=> {
    if(startGame && !reset) {
      const localTimer= setInterval(() => {
        tick()
      }, 1000);
      setTimer(localTimer);
    }
  },[startGame,reset])

  const handleClickPlay = ()=> {    
    setSeconds(0);
    setStartGame(true);
  }

  const resetTimer=()=> {
    clearInterval(timer);
  }
  const handleClickReset=() => {  
    setReset(true)
    resetTimer();
    setSeconds(0);
    setIsLoading(true);
    if(isWin) setIsWin(false);
  }

  return (
    <div className="App">   
      {!startGame ? 
        <Start onClick={handleClickPlay}/> : 
        !isLoading && data.length ? <Board data={data} handleIsWin={handleIsWin}/>: null}
        <Counter seconds={seconds}/>        
        {
                isWin ? <Win /> : null
        }
        <p onClick={handleClickReset}>reset</p>
    </div>
  );
}

export default App;
