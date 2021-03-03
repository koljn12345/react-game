import { useEffect, useState } from "react";
import "./App.css";
import { Board } from "./components/Board/Board";
import { Counter } from "./components/Counter/Counter";
import { Popup } from "./components/Popup/Popup";
import { getData } from "./util/util";

const settingsS = {
  quantity: {
    current: 4,
    mass: [4, 6, 8, 10],
    name: "Quantity"
  },
  background: {
    current: "v2",
    mass: ["v1", "v2", "v3"],
    name: "Background image"
  },
  bgCard: {
    current: "s2",
    mass: ["s1","s2","s3","s4","s5"],
    name: "Card image"
  }
};
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [seconds, setSeconds] = useState(-2);
  const [isWin, setIsWin] = useState(false);
  const [timer, setTimer] = useState(null);
  const [reset, setReset] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const [settings, setSettings] = useState(settingsS);
  const [isNewSettings, setIsNewSettings] =useState(false)
  const [stepsCount, setStepsCount] = useState(0)
  const handleIsWin = () => {
    setIsWin(true);
   // resetTimer();
  };

  useEffect(() => {
    if(isLoading || isNewSettings) newGame();
  }, [isLoading, isNewSettings]);

  const newGame = () => {
    getData(settings.quantity.current).then((res) => {
      setIsLoading(false);
      setData(res);
      setReset(false);
      setIsNewSettings(false)
      setStepsCount(0)
    });
  };
  
  const handleStepsCount= () => {
    setStepsCount(prev=> prev+1)
  }
  // const tick = () => {
  //   setSeconds((sec) => sec + 1);
  // };

  // useEffect(() => {
  //   if (startGame && !reset) {
  //     const localTimer = setInterval(() => {
  //       tick();
  //     }, 1000);
  //     setTimer(localTimer);
  //   }
  // }, [startGame, reset]);



  const handleClickPlay = () => {
    setSeconds(-2);
    setStartGame(true);
  };

  // const resetTimer = () => {
  //   clearInterval(timer);
  // };
  const handleClickReset = () => {
    setReset(true);
  //  resetTimer();
    setSeconds(-2);
    setIsLoading(true);
    if (isWin) setIsWin(false);
    if (isSettings) setIsSettings(false);
  };
  const handleClicksettings = () => {
    setIsSettings(true);
  };
  const handleClickParametr = (param, value) => {
    console.log(param+' '+value)
    setSettings(prev=>({
      ...prev,
      [param] : {
        ...prev[param],
        current: value
      }      
    }));
    setIsNewSettings(true)
  };
  const handleClickClose=()=> {
    setIsSettings(false);
  }

  const classN= `App ${settings.background.current}`;
  return (    
    <div className={classN}>
      {startGame && !isLoading && data.length ? (
        <Board data={data} handleIsWin={handleIsWin} handleStepsCount={handleStepsCount} settings={settings} />
      ) : null}
      <Counter seconds={stepsCount} />
      {!startGame || isWin || isSettings ? (
        <Popup
          startGame={startGame}
          isWin={isWin}
          isSettings={isSettings}
          handleClickPlay={handleClickPlay}
          handleClickReset={handleClickReset}
          handleClickParametr={handleClickParametr}
          settings={settings}
          stepsCount= {stepsCount}
          onClickClose= {handleClickClose}
        />
      ) : <div className="btn" onClick={handleClicksettings}>settings</div>}
      
      {isLoading? <div className="App-logo">Loading....</div> : null}
    </div>
  );
}

export default App;
