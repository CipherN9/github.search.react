import React from 'react';
import styles from './SearchBar.module.css';
import {FaGithub} from 'react-icons/fa';
import {ApiSearchCreateSearchTypeEnum} from "../../api-client";
import type {SearchResultList} from "../../api-client";

type EventCallback = (value: string) => void
type SearchTypeEventCallback = (value: ApiSearchCreateSearchTypeEnum) => void
type setItemsCallback = (value: SearchResultList[]) => void

interface SearchBarProps {
    query: string;
    onChangeCallback: EventCallback;
    searchType: ApiSearchCreateSearchTypeEnum;
    setSearchType: SearchTypeEventCallback;
    setItems: setItemsCallback;
}

const SearchBar: React.FC<SearchBarProps> = ({query, onChangeCallback, searchType, setSearchType, setItems}) => {
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
                        onChange={(e) => onChangeCallback(e.target.value)
                    }
                    />

                    <select
                        className={styles.select}
                        value={searchType}
                        onChange={e => {
                            onChangeCallback("")
                            setItems([])
                            setSearchType(e.target.value as ApiSearchCreateSearchTypeEnum)}}
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
