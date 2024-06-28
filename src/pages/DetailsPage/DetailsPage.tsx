import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { Show } from '../../data';
import { getShowDetails } from '../../data/requests';
import { getStars } from '../../utils/utils';
import styles from './DetailsPage.module.css';

interface CastMember {
  person: {
    id: number;
    name: string;
    image: {
      medium: string;
    };
  };
  character: {
    name: string;
  };
}

const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const [show, setShow] = useState<Show | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowDetails = async () => {
      setLoading(true);
      const showDetails = await getShowDetails(Number(id));
      setShow(showDetails.show);
      setCast(showDetails.cast);
      setLoading(false);
    };

    fetchShowDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!show) {
    return <p>Show not found.</p>;
  }

  return (
    <div className={styles.detailsPage}>
      <Link to='/' className={styles.backLink}>
        <BiArrowBack /> Back to search results
      </Link>
      <div className={styles.header}>
        <img
          src={show.image?.medium || '/public/placeholderImg.png'}
          alt={show.name}
          className={styles.showImage}
        />
        <div className={styles.showInfo}>
          <h1>{show.name}</h1>
          <div className={styles.stars}>
            {show.rating?.average ? getStars(show.rating.average) : 'No rating'}
          </div>
          <p>
            <strong>Genres:</strong> {show.genres.join(', ')}
          </p>
          <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
        </div>
      </div>
      <h2>Cast</h2>
      <div className={styles.castList}>
        {cast.map((member) => (
          <div key={member.person.id} className={styles.castMember}>
            <div className='imgContainer'>
              <img
                src={
                  member.person.image?.medium || '/public/placeholderImg.png'
                }
                alt={member.person.name}
              />
            </div>
            <p>
              {member.person.name} as {member.character.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsPage;
