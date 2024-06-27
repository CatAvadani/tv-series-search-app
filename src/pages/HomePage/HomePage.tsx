import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { SearchResult } from '../../data';
import styles from './HomePage.module.css';

const API_BASE_URL = 'https://api.tvmaze.com';

export const searchShows = async (query: string) => {
  const response = await fetch(`${API_BASE_URL}/search/shows?q=${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch shows');
  }
  return response.json();
};

const HomePage: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const handleSearch = (query: string) => {
    searchShows(query).then((data) => {
      setResults(data);
    });
  };
  return (
    <div className={styles.homePage}>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {results.map((result) => (
          <li key={result.show.id}>{result.show.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
