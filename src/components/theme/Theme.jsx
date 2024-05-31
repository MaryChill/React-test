import ListElement from "../list/ListElement.jsx";
import React from "react";
import "./Theme.scss"

export default function Theme({theme, elements}) {
    return (
        <div className="theme">
            <div className="theme__item">
                <h4 className="h4">{theme[0]}</h4>
                <ul>
                    <ListElement item={elements.item} link={elements.link}/>
                    <ListElement item={elements.item} link={elements.link}/>
                </ul>
            </div>
            {/*<div className="theme__item">*/}
            {/*    <h4 className="h4">{theme[1]}</h4>*/}
            {/*    <ul>*/}
            {/*        <ListElement item={elements[0].item} link={elements[0].link}/>*/}
            {/*        <ListElement item={elements[1].item} link={elements[1].link}/>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    )
}