import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'utils/api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [isCastShow, setIsCastShow] = useState(false);
  const [cast, setCast] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    getMovieCredits(movieId)
      .then(({ data }) => {
        setCast(data.cast);
        setIsCastShow(true);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieId]);

  return (
    <>
      {!isLoader && isCastShow && (
        <>
          {cast.length > 0 ? (
            <ul className={css.cast_list}>
              {cast.map(({ original_name, character, id, profile_path }) => (
                <li key={id}>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                      alt={original_name}
                    />
                  ) : (
                    <img
                      src={`https://via.placeholder.com/200x300?text=No+Image`}
                      alt={`${original_name} profile`}
                    />
                  )}
                  <div className={css.cast_info}>
                    <h3 className={css.cast_name}>{original_name}</h3>
                    <p>Character: {character} </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>We don't have any casts for this movie</p>
          )}
        </>
      )}
    </>
  );
};

export default Cast;
