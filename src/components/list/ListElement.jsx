import "./ListElement.scss";
import {useState} from "react";
import Popup from '../popup/Popup.jsx'

export default function ListElement({link, icon, alt, btn, item}) {
    const [popup, setPopup] = useState('')
    function viewPopup() {
        setPopup(popup === '' ? 'active' : '')
    }
    return (
        <li>
            {icon !== undefined &&
                <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={icon} className="logo" alt={alt}/>
                </a>
            }
            {btn !== undefined &&
                <>
                    <button className="btn list__libraries" onClick={() => viewPopup()}>{btn}</button>
                     <Popup popup={popup}/>
                </>

            }
            {item !== undefined &&
                <p className="btn list__libraries">{item}</p> 
            }
        </li>

    )
}


