import React from 'react';
import { Link } from 'react-router-dom';
import { SearchResult } from '../../data';
import { getStars } from '../../utils/utils';
import styles from './SearchResults.module.css';

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className={styles.searchResults}>
      {results.map((result) => (
        <div key={result.show.id} className={styles.searchResult}>
          <Link to={`/shows/${result.show.id}`}>
            <img
              src={result.show.image?.medium || 'placeholder-image-url'}
              alt={result.show.name}
            />
            <h2>{result.show.name}</h2>
            {getStars(result.show.rating.average)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
