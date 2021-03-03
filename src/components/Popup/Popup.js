import { Settings } from "../Settings/Settings";
import { Start } from "../Start/Start";
import { Win } from "../Win/Win";
import "./Popup.css";
export const Popup = ({
  handleClickPlay,
  handleClickReset,
  startGame,
  isWin,
  isSettings,
  settings,
  handleClickParametr,
  stepsCount,
  onClickClose
}) => {
  return (
    <>
      <div className="popup">
        {!startGame ? <Start onClick={handleClickPlay} /> : null}
        {isWin ? <Win onClick={handleClickReset} stepsCount={stepsCount} /> : null}
        {isSettings ? (
          <Settings
            onClick={handleClickReset}
            settings={settings}
            onClickParametr={handleClickParametr}
            onClickClose={onClickClose}
          />
        ) : null}
      </div>
      <div className="popup__bg"></div>
    </>
  );
};
