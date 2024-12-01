import React from "react";
import Accordion from "./components/accordion/Accordion";
import "./App.css"

const App = () => {
    const datain = {
        1: {
            isOpen: false,
            title: "title1",
            text: "text1"
        },
        2: {
            isOpen: false,
            title: "title2",
            text: "text2"
        },
        3: {
            isOpen: false,
            title: "title3",
            text: "text3"
        }
    }

    return <Accordion datain={datain} closeOthers={true}/>
}

export default App;