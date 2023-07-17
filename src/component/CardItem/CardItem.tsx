import React from 'react';
import './CardItem.scss';
import imageBackground from '../../assets/image/testitem.jpg';

function CardItem() {
    return (
        <div className={"cardroot"}>
            <img src={imageBackground} alt={"mon image"}/>
            <p>Creme de Jouvence</p>
        </div>
    );
}
export default CardItem;