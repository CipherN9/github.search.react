import React from "react";
import styles from './UserCard.module.css';
import {User} from "../../../api-client";

interface UserCardProps {
    cardData: User
}

const UserCard: React.FC<UserCardProps> = ({cardData}) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} alt={'User avatar'} src={cardData.avatar_url}/>
            <p className={styles.name}>{`name: ${cardData.title}`}</p>
            <p className={styles.location}> {cardData.location ? `location: ${cardData.location}`: "" }</p>
        </div>
    );
}

export default UserCard;
