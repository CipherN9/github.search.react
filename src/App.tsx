import React, {useMemo, useState} from 'react';
import {fetchSearch} from './searchClient';
import type {SearchResponse} from './api-client';
import SearchBar from "./components/SearchBar/SearchBar";
import CardsList from "./components/CardsList/CardsList"
import debounce from 'lodash.debounce';

const App: React.FC = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [items, setItems] = useState<SearchResponse[]>([]);
    const [error, setError] = useState<string | null>(null);
    const getItems = async (query: string) => {
        if (!query) return;

        try {
            const response = await fetchSearch('users', query)
            setItems(response)
        } catch (err) {
            setError(String(err))
        }
    }

    const debouncedFetch = useMemo(() => debounce(getItems, 300), [])

    const debouncedOnChange = (value: string) => {
        setSearchText(value)
        debouncedFetch(value)
    }

    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <SearchBar query={searchText} onChangeCallback={debouncedOnChange}/>
            {(items.length === 0 && searchText !== "") ?
                (<p>Loading... </p>) :

                (<CardsList cards={items}/>)
            }
        </div>
    )
};

export default App;