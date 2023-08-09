import React from 'react';
import style from './Logos.module.css';
import apple from '../images/apple.png';
import rog from '../images/rog.png';
import samsung from '../images/samsung.png';
const Logos = () => {
    return (
        <div className={style.container}>
            <h3>Who supported us?</h3>
            <div className={style.logos}>
                <img src={apple} />
                <img src={rog} />
                <img src={samsung} />
            </div>
        </div>
    );
};

export default Logos;