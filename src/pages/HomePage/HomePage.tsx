import React, { useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import { SearchResult } from '../../data';
import { searchShows } from '../../data/requests';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchShows(query);
      setResults(data);
    } catch (err) {
      setError('Failed to fetch search results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.homePage}>
      <div
        className={`${styles.header} ${
          results.length > 0 ? styles.resultsHeader : ''
        }`}
      >
        <img src='/logo.png' alt='TV Maze Logo' className={styles.logo} />
        <div className={styles.searchBarContainer}>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      {loading && <LoadingSpinner />}
      {error && <p className={styles.error}>{error}</p>}
      {results.length > 0 && <SearchResults results={results} />}
    </div>
  );
};

export default HomePage;
