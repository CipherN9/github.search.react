import React, {useEffect, useState} from 'react';
import {fetchSearch} from './searchClient';
import type {SearchResponse} from './api-client';
import SearchBar from "./components/SearchBar/SearchBar";
import CardsList from "./components/CardsList/CardsList"

const App: React.FC = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [items, setItems] = useState<SearchResponse[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (searchText !== "") {
            fetchSearch('users', searchText)
                .then(data => {
                    setItems(data);
                    console.log('Received', data.length, 'objects', data);
                })
                .catch(err => {
                    console.error('Error request:', err);
                    setError(String(err));
                });
        }
    }, [searchText]);

    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <SearchBar setTextCallback={setSearchText}/>
            {(items.length === 0 && searchText !== "") ?
                (<p>Loading...</p>) :

                (<CardsList cards={items}/>)
            }
        </div>
    )
};

export default App;