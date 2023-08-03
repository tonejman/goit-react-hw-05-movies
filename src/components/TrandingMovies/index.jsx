import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export function TrandingMovies({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

TrandingMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired),
};
