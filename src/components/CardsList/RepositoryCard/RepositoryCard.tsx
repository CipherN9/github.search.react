import React from "react";
import styles from './RepositoryCard.module.css';
import {Repository} from "../../../api-client";

interface RepositoryCardProps {
    cardData: Repository
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({cardData}) => {
    return (
        <div className={styles.card}>
            <p className={styles.name}>{`name: ${cardData.title}`}</p>
        </div>
    );
}

export default RepositoryCard;
