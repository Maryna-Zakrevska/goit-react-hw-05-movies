import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/movie-api";
import {
  ReviewsDivStyled,
  ReviewsListStyled,
  ReviewsListItemStyled,
  ReviewAuthorNameStyled,
  ReviewContentStyled,
} from "./Reviews.styled";

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId)
      .then(setMovieReviews)
      .catch((error) => toast("No results, please try again"));
  }, [movieId]);
  const hasMovieReviews = movieReviews?.results?.length > 0;
  return (
    <ReviewsDivStyled id="reviews">
      {hasMovieReviews ? (
        <ReviewsListStyled>
          {movieReviews.results.map(({ id, author, content }) => (
            <ReviewsListItemStyled key={id}>
              <ReviewAuthorNameStyled>Author: {author}</ReviewAuthorNameStyled>
              <ReviewContentStyled>{content}</ReviewContentStyled>
            </ReviewsListItemStyled>
          ))}
        </ReviewsListStyled>
      ) : (
        <div>
          <p>We don't have any reviews for this movie</p>
        </div>
      )}
    </ReviewsDivStyled>
  );
}
