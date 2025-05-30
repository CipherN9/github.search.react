import React from "react";
import styles from './UserCard.module.css';
import {SearchResponse} from "../../../api-client";

interface UserCardProps {
    cardData: SearchResponse
}

const UserCard: React.FC<UserCardProps> = ({cardData}) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} alt={'User avatar'} src={cardData.avatar_url}/>
            <p className={styles.name}>{cardData.title}</p>
            <p className={styles.location}>{cardData.location}</p>
        </div>
    );
}

export default UserCard;
