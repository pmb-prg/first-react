import React from 'react';
import style from './Banner.module.css';
import backG from '../images/back2.jpg';
const Banner = () => {
    return (
        <div className={style.banner}>
            <img src={backG} alt='BackGround' className={style.back}/>
            <div className={style.textContainer}>
                <h1>Phone Store</h1>
                <p>We find best <span>phone</span> for you!</p>
            </div>
        </div>
    );
};

export default Banner;