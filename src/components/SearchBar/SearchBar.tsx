import React, {useState} from 'react';
import styles from './SearchBar.module.css';
import {FaGithub} from 'react-icons/fa';
import Card from "../Card/Card";

type SearchType = 'users' | 'repositories';

interface CardData {
    id: number
    name: string
    location: string
    avatarUrl?: string
}

const cardss: CardData[] = [
    {id: 1, name: 'Перша картка', location: 'Опис першої картки. Опис першої картки. Опис першої картки. Опис першої картки. Опис першої картки. '},
    {id: 2, name: 'Друга картка', location: 'Опис другої картки'},
    {id: 3, name: 'Третя картка', location: 'Опис третьої картки'},
    {id: 4, name: '4 картка', location: 'Опис першої картки'},
    {id: 5, name: '5 картка', location: 'Опис другої картки'},
    {id: 6, name: '6 картка', location: 'Опис третьої картки'},
    {id: 7, name: '7 картка', location: 'Опис першої картки'},
    {id: 8, name: '8 картка', location: 'Опис другої картки'},
    {id: 9, name: '9 картка', location: 'Опис третьої картки'},
    {id: 10, name: '10 картка', location: 'Опис першої картки'},
    {id: 11, name: '11 картка', location: 'Опис другої картки'},
    {id: 12, name: '12 картка', location: 'Опис третьої картки'},
    {id: 13, name: '13 картка', location: 'Опис першої картки'},
    {id: 14, name: '14 картка', location: 'Опис другої картки'},
    {id: 15, name: '15 картка', location: 'Опис третьої картки'},
];

const cards: CardData[] = cardss.map((card, index) => ({...card, 'avatarUrl': `https://picsum.photos/300/200?random=${index}`}))


const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const [type, setType] = useState<SearchType>('users');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div>
            <form className={styles.container} onSubmit={submit}>
                <div className={styles.header}>
                    <FaGithub className={styles.icon}/>
                    <div className={styles.brand}>
                        <h1 className={styles.title}>GitHub Searcher</h1>
                        <p className={styles.subtitle}>Search users or repositories below</p>
                    </div>
                </div>

                <div className={styles.controls}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Start typing to search …"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />

                    <select
                        className={styles.select}
                        value={type}
                        onChange={e => setType(e.target.value as SearchType)}
                    >
                        <option value="users">Users</option>
                        <option value="repositories">Repositories</option>
                    </select>
                </div>
            </form>
            <div className={styles['cards-container']}>
                {cards.map((card) => (
                    <Card cardData={card}/>
                ))}

            </div>
        </div>
    );
};

export default SearchBar;
