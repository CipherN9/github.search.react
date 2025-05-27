import React from "react";
import styles from './Card.module.css';

interface CardData {
    id: number
    name: string
    location: string
    avatarUrl?: string
}

interface CardProps {
    cardData: CardData
}

const Card: React.FC<CardProps> = ({cardData}) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} alt={'User avatar'} src={cardData.avatarUrl}/>
            <p className={styles.name}>{cardData.name}</p>
            <p className={styles.location}>{cardData.location}</p>
        </div>
    );
}

export default Card;