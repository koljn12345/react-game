import * as images from '../../assets/images/script';
import './Settings.css'
export const Settings = ({onClick, settings,onClickParametr,onClickClose}) => {
    //console.log(images)
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
                                       return <img className="settings__item" src={images[el]} height="100" width="70" alt='img' onClick={()=>onClickParametr(param, el)}></img>
                                    }
                                     return <div className="settings__item" key={i}  onClick={()=>onClickParametr(param, el)}>{el}</div>
                        })
                    }
                    </div>
                </div>                             
            }) } 

            <div className="btn" onClick={onClick}>Reset</div>
            <div className="btn" onClick={onClickClose}>Close</div>
        </div>  
    )
}