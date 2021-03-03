import * as images from '../../assets/images/script';
import { CloseButton } from '../CloseButton/ClosseButton';
import { ResetButton } from '../ResetButton/ResetButton';
import './Settings.css'
export const Settings = ({onClickReset, settings,onClickParametr,onClickClose}) => {
    return (
        <div className="content">
            <h1>Settings</h1>
            {Object.keys(settings).map(param=>{
                return <div className="settings__group">
                    <p className="settings__header">{settings[param].name}</p>
                    <div className="settings__items">
                    {
                        settings[param].mass.map((el,i) => {
                            if(param === 'background' || param === 'bgCard') {
                                        const classN= el === settings[param].current ? "settings__item active" :"settings__item"
                                       return <img className={classN} src={images[el]} height="100" width="70" alt='img' onClick={()=>onClickParametr(param, el)}></img>
                                    }
                                    const classN= el === settings[param].current ? "settings__item--select active" :"settings__item--select"
                                     return <div className={classN} key={i}  onClick={()=>onClickParametr(param, el)}>{el}</div>
                        })
                    }
                    </div>
                </div>                             
            }) } 
            <ResetButton onClick={onClickReset}/>
            <CloseButton onClick={onClickClose} />
        </div>  
    )
}