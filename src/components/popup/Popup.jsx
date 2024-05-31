import './Popup.scss'
import ListElement from "../list/ListElement.jsx";
import {dataLibraries, dataList} from "../data.js";
export default function Popup({popup}) {
    return (
        <div className={popup + ' popup'}>
            <div className="popup__wrapper">
                <ul>
                    <ListElement {...dataLibraries[0]}/>
                    <ListElement {...dataLibraries[1]}/>
                </ul>
            </div>
        </div>
    )
}