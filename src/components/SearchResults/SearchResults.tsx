import { SearchResult } from '../../data';

interface SearchResultsProps {
  results: SearchResult[];
}
const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <div>
      <ul>
        {results.map((result) => (
          <li key={result.show.id}>{result.show.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
