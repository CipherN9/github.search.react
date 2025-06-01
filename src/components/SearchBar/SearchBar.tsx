import React, {useState} from 'react';
import styles from './SearchBar.module.css';
import {FaGithub} from 'react-icons/fa';

type SearchType = 'users' | 'repositories';
type SearchCallback = (text: string) => void

interface SearchBarProps {
    query: string;
    onChangeCallback: SearchCallback;
}

const SearchBar: React.FC<SearchBarProps> = ({query, onChangeCallback}) => {
    const [type, setType] = useState<SearchType>('users');

    return (
        <div>
            <form className={styles.container}>
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
                        onChange={(e) => onChangeCallback(e.target.value)}
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
        </div>
    );
};

export default SearchBar;
