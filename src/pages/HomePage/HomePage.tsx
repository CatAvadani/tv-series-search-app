import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import { SearchResult } from '../../data';
import { searchShows } from '../../utils/requests';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async (query: string) => {
    const data = await searchShows(query);
    setResults(data);
  };
  return (
    <div className={styles.homePage}>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
};

export default HomePage;
