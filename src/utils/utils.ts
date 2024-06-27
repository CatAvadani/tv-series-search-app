export const getStars = (rating: number): string => {
  const stars = '⭐️'.repeat(Math.round(rating));
  return stars || 'No rating';
};
