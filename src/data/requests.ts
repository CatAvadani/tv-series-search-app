const API_BASE_URL = 'https://api.tvmaze.com';

export const searchShows = async (query: string) => {
  const response = await fetch(`${API_BASE_URL}/search/shows?q=${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch shows');
  }
  return response.json();
};

export const getShowDetails = async (id: number) => {
  const showResponse = await fetch(`${API_BASE_URL}/shows/${id}`);
  const show = await showResponse.json();

  const castResponse = await fetch(`${API_BASE_URL}/shows/${id}/cast`);
  const cast = await castResponse.json();

  return { show, cast };
};
