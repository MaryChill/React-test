import React from "react";
import "./Theme.scss"
import Tabs from "../tabs/Tabs.jsx";
import { dataTabs } from "../data.js";

export default function Theme({theme, items, tab}) {
    // console.log(dataTabs[0])
    return (
        <div className="theme">
            <div className="theme__item">
                <h4 className="h4">{theme}</h4>
                <Tabs onClick={() => tab(items[0])}>{items[0]}</Tabs>
                <Tabs onClick={() => tab(items[1])}>{items[1]}</Tabs>
            </div>
        </div>
    )
}