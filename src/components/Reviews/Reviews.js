import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movie-api';

export const Reviews = () => {
    const [movieReviews, setMovieReviews] = useState(null)
    const { movieId } = useParams();
    useEffect(() => {
      getMovieReviews(movieId)
          .then(setMovieReviews)
          .catch((error) => toast("No results, please try again"));
      }, [movieId ]);
      const hasMovieReviews = movieReviews?.results?.length > 0;
  return <div>
  {hasMovieReviews ? (
    <ul>
{movieReviews.results.map(({ id, author, content}) => (
            <li key={id}>
              <b>Author: {author}</b>
              <p>{content}</p>
            </li>
          ))}
    </ul>
  ) : (
    <div>
      <p>We don't have any reviews for this movie</p>
    </div>
  )}
</div>
};
