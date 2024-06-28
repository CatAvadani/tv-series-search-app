import React, { useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.searchContainer}>
        <input
          type='text'
          placeholder='Search for TV shows'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button type='submit' className={styles.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
