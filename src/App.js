import { useEffect, useState } from "react";
import "./App.css";
import { Board } from "./components/Board/Board";
import { Counter } from "./components/Counter/Counter";
import { Popup } from "./components/Popup/Popup";
import { Sounds } from "./components/Sounds/Sounds";
import { SettingsButton } from "./components/SettingsButton/SettingsButton";
import { getData } from "./util/util";

const settingsS = {
  quantity: {
    current: 6,
    mass: [4, 6, 8, 10, 12],
    name: "Quantity",
  },
  background: {
    current: "v1",
    mass: ["v1", "v2", "v3"],
    name: "Background image",
  },
  bgCard: {
    current: "s3",
    mass: ["s1", "s2", "s3", "s4", "s5"],
    name: "Card image",
  },
};
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const [settings, setSettings] = useState(settingsS);
  const [isNewSettings, setIsNewSettings] = useState(false);
  const [stepsCount, setStepsCount] = useState(0);
  const [propsSound,setPropsSound]=useState({});
  const handleIsWin = () => {
    setIsWin(true);
  };

  useEffect(() => {
    if (isLoading || isNewSettings) newGame();
  }, [isLoading, isNewSettings]);

  const newGame = () => {
    getData(settings.quantity.current).then((res) => {
      setIsLoading(false);
      setData(res);
      setIsNewSettings(false);
      setStepsCount(0);
    });
  };

  const handleStepsCount = () => {
    setStepsCount((prev) => prev + 1);
  };

  const handleClickPlay = () => {
    setStartGame(true);
  };

  const handleClickReset = () => {
    setIsLoading(true);
    if (isWin) setIsWin(false);
    if (isSettings) setIsSettings(false);
  };
  const handleClicksettings = () => {
    setIsSettings(true);
  };
  const handleClickParametr = (param, value) => {
    setSettings((prev) => ({
      ...prev,
      [param]: {
        ...prev[param],
        current: value,
      },
    }));
    setIsNewSettings(true);
  };
  const handleClickClose = () => {
    setIsSettings(false);
  };
  const handleChangePropsSounds=(openCards, success,fail)=> {
    setPropsSound({
      openCards,
      success,
      fail
    })
  }

  const classN = `App ${settings.background.current}`;
  return (
    <div className={classN}>
      <Sounds isWin={isWin} propsSound={propsSound} />
      {startGame && !isLoading && data.length ? (
        <Board
          data={data}
          handleIsWin={handleIsWin}
          handleStepsCount={handleStepsCount}
          settings={settings}
          changePropsSounds={handleChangePropsSounds}
        />
      ) : null}
      <Counter count={stepsCount} />
      {!startGame || isWin || isSettings ? (
        <Popup
          startGame={startGame}
          isWin={isWin}
          isSettings={isSettings}
          handleClickPlay={handleClickPlay}
          handleClickReset={handleClickReset}
          handleClickParametr={handleClickParametr}
          settings={settings}
          stepsCount={stepsCount}
          onClickClose={handleClickClose}
        />
      ) : (
        <SettingsButton handleClicksettings={handleClicksettings} />
        
      )}

      {isLoading ? <div className="">Loading....</div> : null}
    </div>
  );
}

export default App;
