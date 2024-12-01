import React, { useState } from "react";
import "./Accordion.css";


const Accordion = ({ datain, closeOthers }) => {

    const [data, setData] = useState(datain);
    
    function handleClick(changedKey) {
        setData((prevData) => {
            let newData = {};
    
            Object.keys(prevData).forEach((key) => {
                if (key === changedKey) {
                    newData[key] = {
                        ...prevData[key],
                        isOpen: !prevData[key].isOpen
                    };
                } else {
                    newData[key] = {
                        ...prevData[key],
                        isOpen: closeOthers ? false : prevData[key].isOpen
                    };
                };
            });
            
            return newData;
        });
    }
    
    const elements = Object.keys(data).map((key) => {
        const el = data[key];
        return (
            <div key={key} className="element">
                <div className="element-header">
                    <div className="header-text">
                        {el.title}
                    </div>
                    <button className="header-button" onClick={() => handleClick(key)}>
                        {el.isOpen ? "-" : "+"}
                    </button>
                </div>
                <div className={`element-body ${!el.isOpen && "hidden"}`}>
                    {el.text}
                </div>
            </div>
        );
    })
    
    return (
        <div className="container">
            {elements}
        </div>
    )    
}

export default Accordion;