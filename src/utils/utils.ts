export const getStars = (rating: number): string => {
  const totalStars = 10;
  const filledStars = Math.round(rating);
  const emptyStars = totalStars - filledStars;
  const stars = '⭐️'.repeat(filledStars) + '☆'.repeat(emptyStars);
  return stars || 'No rating';
};
