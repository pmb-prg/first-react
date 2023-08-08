import React from 'react';
import style from './Cards.module.css';
import Card from './Card';
import sony from '../images/sony2.jpg';
import apple from '../images/iphone-14.jpeg';
import sam from '../images/samsung1.jpg';
import asus from '../images/asus.jpg';

const Cards = () => {
    return (
        <div className={style.cardContainer}>
            <Card image={sony} name="Xperia 1 ii" price="820" />
            <Card image={apple} name="14 pro max" price="800" />
            <Card image={sam} name="S23 ultra" price="750" />
            <Card image={asus} name="Rog phone 7" price="780" />
        </div>
    );
};

export default Cards;