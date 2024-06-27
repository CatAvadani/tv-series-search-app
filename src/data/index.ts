export interface SearchResult {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  name: string;
  genres: string[];
  summary: string;
  image: { medium: string; original: string };
  cast: {
    person: { id: number; name: string; image: { medium: string } };
    character: { name: string };
  }[];
}
