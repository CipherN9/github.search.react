import React from 'react';
import styles from './SearchBar.module.css';
import {FaGithub} from 'react-icons/fa';
import {ApiSearchCreateSearchTypeEnum} from "../../api-client";
import type {SearchResultList} from "../../api-client";

interface SearchBarProps {
    searchText: string;
    inputOnChangeCb: (value: string) => void;
    searchType: ApiSearchCreateSearchTypeEnum;
    setSearchType: (value: ApiSearchCreateSearchTypeEnum) => void;
    setItems: (value: SearchResultList[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({searchText, inputOnChangeCb, searchType, setSearchType, setItems}) => {
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
                        value={searchText}
                        onChange={(e) => {
                            inputOnChangeCb(e.target.value)
                            if (e.target.value === "") setItems([])
                        }
                        }
                    />

                    <select
                        className={styles.select}
                        value={searchType}
                        onChange={e => {
                            setSearchType(e.target.value as ApiSearchCreateSearchTypeEnum)
                            inputOnChangeCb("")
                            setItems([])
                        }
                        }
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
