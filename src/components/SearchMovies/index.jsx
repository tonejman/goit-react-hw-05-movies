import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export function SearchMovies({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

SearchMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired),
};
