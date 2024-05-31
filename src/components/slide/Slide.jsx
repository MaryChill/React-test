import "./Slide.scss";
import React from "react";
import Theme from "../theme/Theme.jsx";

export default function Slide({title, theme, tab}) {
    return (
        <div className="slide">
            <h2 className="h2">{title}</h2>
            <div className="slide__wrapper">
                <Theme theme={theme[0].subTitle} items={theme[0].items} tab={tab}/>
                <Theme theme={theme[1].subTitle} items={theme[1].items} tab={tab}/>
            </div>
        </div>
    )
}