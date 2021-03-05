import './Sounds.css';
import { useEffect, useState } from "react";
import * as soundsI from "../../assets/sounds/sctirpt";
import musicImg from "../../assets/images/music.svg";
import soundImg from "../../assets/images/sound.svg";
import { createAudio } from "../../util/util";

const soundSettings = {
  music: {
    muted: true,
    volume: 0.1,
  },
  sound: {
    muted: false,
    volume: 0.2,
  },
};
export const Sounds = ({ isWin, propsSound, isSettings, startGame }) => {
  const [sound, setSound] = useState(null);
  const [parametrs, setParametrs] = useState(soundSettings);

  useEffect(() => {
    setSound(createAudio(soundsI));
  }, []);
  useEffect(() => {
    if (sound) {
      sound.fon.loop = true;
      sound.fon.volume = 0.1;
      Object.keys(sound).map((el) => {if (el !== "fon") sound[el].volume = parametrs.sound.volume;})
    }
  }, [sound]);
  useEffect(() => {
    if (propsSound.openCards) sound.card.play();
    if (propsSound.fail) sound.fail.play();
    if (propsSound.success) sound.success.play();
  }, [propsSound]);
  useEffect(() => {
    if (isWin) sound.win.play();
  }, [isWin]);

  useEffect(() => {
    if (sound) {
      Object.keys(sound).map((el) => {
        if (el === "fon") {
          parametrs.music.muted ? sound[el].pause() : sound[el].play();
          sound[el].volume = parametrs.music.volume;
        } else {
          parametrs.sound.muted
            ? (sound[el].muted = true)
            : (sound[el].muted = false);
          sound[el].volume = parametrs.sound.volume;
        }
      });
    }
  }, [parametrs]);

  const handleChangeVolume = (type,e) => {
    setParametrs((prev) => {
      return {
        ...prev,
        [type]: {
          ...prev[type],
          volume: e.target.value,
        },
      };
    });
  };
  const handleToggleSound = (type) => {
    setParametrs((prev) => {
      return {
        ...prev,
        [type]: {
          ...prev[type],
          muted: !prev[type].muted,
        },
      };
    });
  };
  return (
    !startGame || isWin || isSettings ? null : 
    (<div className="sounds__container">
      <div className={parametrs.music.muted ? 'sounds muted': 'sounds'}> 
        <img src={musicImg} height="64"alt="img" onClick={() => handleToggleSound("music")}></img>
        <input type="range" min="0.05"  max="1" step="0.05" value={parametrs.music.volume}
      onChange={(e) => handleChangeVolume("music",e)} />      
      </div>
      <div className={parametrs.sound.muted ? 'sounds muted': 'sounds'}> 
        <img src={soundImg} height="64" alt="img" onClick={() => handleToggleSound("sound")} ></img>
        <input type="range"  min="0.05"  max="1"  step="0.05" value={parametrs.sound.volume}
          onChange={(e) => handleChangeVolume("sound",e)}  />    
      </div>
    
  </div>)    
  );
};
