import "./SettingsButton.css";
import img from "../../assets/images/settings.svg";
export const SettingsButton = ({ handleClicksettings }) => {
  return (
    <img
      className="settingButton"
      src={img}
      alt="img"
      height="64"
      width="64"
      onClick={handleClicksettings}
    ></img>
  );
};
