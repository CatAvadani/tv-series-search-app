import { Show } from '../../data';
import { getStars } from '../../utils/utils';
import styles from './ShowDetails.module.css';

interface ShowDetailsProps {
  show: Show;
}

const ShowDetails = ({ show }: ShowDetailsProps) => {
  return (
    <div className={styles.showDetails}>
      <img
        src={show.image?.medium}
        alt={show.name}
        className={styles.showImage}
      />

      <div>
        <h1>{show.name}</h1>
        <div className={styles.stars}>{getStars(show.rating.average)}</div>
        <div>Genre: {show.summary}</div>
        <div className={styles.cast}>
          {show.cast?.map((castMember) => (
            <div key={castMember.person.id} className={styles.castMember}>
              <img
                src={castMember.person.image?.medium}
                alt={castMember.person.name}
              />
              <p>
                {castMember.person.name} as {castMember.character.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
