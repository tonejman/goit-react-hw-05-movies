import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'utils/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();

  const [isReviewsShow, setIsReviewsShow] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    getMovieReviews(movieId)
      .then(({ data }) => {
        setReviews(data.results);
        setIsReviewsShow(true);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieId]);

  return (
    <>
      {!isLoader && isReviewsShow && (
        <>
          {reviews.length > 0 ? (
            <ul className={css.reviews_list}>
              {reviews.map(({ author, content, id }) => (
                <li key={id}>
                  <h4>Author: {author}</h4>
                  <p className={css.description}>{content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </>
      )}
    </>
  );
};

export default Reviews;
