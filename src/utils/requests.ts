const API_BASE_URL = 'https://api.tvmaze.com';

export const searchShows = async (query: string) => {
  const response = await fetch(`${API_BASE_URL}/search/shows?q=${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch shows');
  }
  return response.json();
};
