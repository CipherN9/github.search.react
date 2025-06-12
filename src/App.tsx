import React, {useCallback, useMemo, useState} from 'react';
import {fetchSearch} from './searchClient';
import {ApiSearchCreateSearchTypeEnum, SearchResultList} from './api-client';
import SearchBar from "./components/SearchBar/SearchBar";
import CardsList from "./components/CardsList/CardsList"
import debounce from 'lodash.debounce';
import styles from './App.module.css'


const App: React.FC = () => {
    const [searchType, setSearchType] = useState<ApiSearchCreateSearchTypeEnum>('users');
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [searchText, setSearchText] = useState<string>("");
    const [items, setItems] = useState<SearchResultList[]>([]);
    const [error, setError] = useState<string | null>(null);

    const getItems = useCallback(async (query: string) => {
        if (!query) return;
        setIsLoading(true)

        try {
            const response = await fetchSearch(searchType, query)
            setItems(response)
            setIsLoading(false)
        } catch (err) {
            setError(String(err))
        }
    }, [searchType])

    const debouncedFetch = useMemo(() => debounce(getItems, 300), [getItems])

    const inputOnChangeCb = async (value: string) => {
        setSearchText(value)
        await debouncedFetch(value)
    }

    if (error) return <div>Error: {error}</div>;

    return (
        <div className={styles.main}>
            <SearchBar searchText={searchText}
                       inputOnChangeCb={inputOnChangeCb}
                       searchType={searchType}
                       setSearchType={setSearchType}
                       setItems={setItems}
            />
            {isLoading ? (<p>Loading...</p>) : (<CardsList searchType={searchType} cards={items}/>)}
        </div>
    )
};

export default App;