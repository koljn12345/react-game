import { useEffect, useState } from "react";
import * as soundsI from "../../assets/sounds/sctirpt";
const createAudio = (sounds) => {
  console.log("create");
  const newSounds = {};
  Object.keys(sounds).map((el) => {
    newSounds[el] = new Audio(sounds[el]);
  });
  return newSounds;
};
const soundSettings = {
  music: {
    muted: true,
    volume: 0.2,
  },
  sound: {
    muted: false,
    volume: 0.4,
  },
};
export const Sounds = ({ isWin, propsSound }) => {
  const [sound, setSound] = useState(null);
  const [parametrs, setParametrs] = useState(soundSettings);

  useEffect(() => {
    setSound(createAudio(soundsI));
  }, []);
  useEffect(() => {
    if (sound) {
      console.log("effect");
      console.log(sound);
      sound.fon.loop = true;
      sound.fon.volume = 0.1;
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

  useEffect(()=>{
      if(sound) {
          Object.keys(sound).map(el=>{        
              if(el==='fon') {
                  parametrs.music.muted ? sound[el].pause() : sound[el].play(); 
                  sound[el].volume=parametrs.music.volume;           
              }
              else {
                  parametrs.sound.muted ? sound[el].muted=true : sound[el].muted=false;
                  sound[el].volume=parametrs.sound.volume;
              }              
          })
      }
  },[parametrs])
  const handleToggleSound = (type) => {
      console.log(parametrs)
    setParametrs((prev) => { return {
        ...prev,
      [type]: {
          ...prev[type],
          muted: !prev[type].muted 
        }
    }
      
    });
  };
  return (
    <>
      <div onClick={() => handleToggleSound("music")}> Music</div>
      <div onClick={() => handleToggleSound("sound")}> Sound</div>
    </>
  );
};
