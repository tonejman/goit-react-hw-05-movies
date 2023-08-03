import { useEffect, useState } from 'react';
import { getMovies } from 'utils/api';
import { TrandingMovies } from 'components/TrandingMovies';
import css from './Home.module.css';

const Home = () => {
  const [isListShow, setIsListShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    if (!isListShow) {
      setIsLoader(true);
      getMovies()
        .then(({ data: { results } }) => {
          setMovies([...results]);
          setIsListShow(true);
        })
        .catch(error => console.log(error))
        .finally(() => {
          setIsLoader(false);
        });
    }
  }, [isListShow]);

  return (
    <>
      {!isLoader && isListShow && (
        <>
          <h2 className={css.title}>Trending today</h2>
          <TrandingMovies movies={movies} />
        </>
      )}
    </>
  );
};

export default Home;
