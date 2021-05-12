import React from 'react';
import "./InfoBlock.scss"
import CountInfo from "../CountInfo/CountInfo";

const InfoBlock = (props) => {
    const {name} = props
    return (
        <div className="info-block">
            <div className="info-block__row-one">
            <p className="user-nickname">{name}</p>
            <select className="user-select">
                <option>Відстежується</option>
                <option>Не відстежувати</option>
            </select>
            <span className="three-points">...</span>
            </div>
                <div className="info-block__row-two">
                    <CountInfo title={" дописів"} count={136}/>
                    <CountInfo title={" читачів"} count={156}/>
                    <CountInfo title={" стежать"} count={143}/>
                </div>
            <p className="user-name">Illia Smolii</p>
            <p className="user-subscribe">Стежать всяко разно и т.п.</p>


        </div>
    );
};

export default InfoBlock;