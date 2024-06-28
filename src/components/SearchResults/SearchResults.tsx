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
            <div className={styles.imageWrapper}>
              <img
                src={result.show.image?.medium || 'placeholderImg.png'}
                alt={result.show.name}
              />
            </div>
            <h2>{result.show.name}</h2>
            <div className={styles.stars}>
              {getStars(result.show.rating.average)}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
