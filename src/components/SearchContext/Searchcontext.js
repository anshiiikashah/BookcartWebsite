// SearchContext.js
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchVisible, setSearchVisible] = useState(false);

    const toggleSearchBar = () => {
        setSearchVisible((prev) => !prev);
    };

    return (
        <SearchContext.Provider value={{ searchVisible, toggleSearchBar }}>
            {children}
        </SearchContext.Provider>
    );
};
