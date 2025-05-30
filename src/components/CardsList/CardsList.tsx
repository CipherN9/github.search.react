import React from "react";
import UserCard from "./UserCard/UserCard";
import type {SearchResponse} from "../../api-client";
import styles from "../CardsList/CardsList.module.css";

interface CardsListProps {
    cards: SearchResponse[];
}

const CardsList: React.FC<CardsListProps> = ({cards}) => {
    return (
        <div className={styles['cards-container']}>
            {cards.map((card) => (<UserCard key={card.id} cardData={card}/>))}
        </div>
    );
}

export default CardsList;