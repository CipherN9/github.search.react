import React from "react";
import UserCard from "./UserCard/UserCard";
import RepositoryCard from "./RepositoryCard/RepositoryCard";
import type {User, Repository, SearchResultList} from "../../api-client";
import {ApiSearchCreateSearchTypeEnum} from "../../api-client";
import styles from "../CardsList/CardsList.module.css";

interface CardsListProps {
    searchType: ApiSearchCreateSearchTypeEnum
    cards: SearchResultList[];
}

const CardsList: React.FC<CardsListProps> = ({searchType, cards}) => {
    return (
        <div className={styles['cards-container']}>
            {searchType === ApiSearchCreateSearchTypeEnum.Users ?
            (cards as User[]).map((card) => (<UserCard key={card.id} cardData={card}/>)):
                (cards as Repository[]).map((card) => (<RepositoryCard key={card.id} cardData={card}/>))
        }
        </div>
    );
}

export default CardsList;