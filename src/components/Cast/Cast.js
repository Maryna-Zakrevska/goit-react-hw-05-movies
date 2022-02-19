import React, { useState, useEffect } from "react";
import { getMovieCredits } from "services/movie-api";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { makeImagePath, PlaceholderIcon } from "components/MovieDetailsPage/MovieDetailsPage";
import {
  CastDivStyled,
  CastListStyled,
  CastImgStyled,
  CastNameStyled,
  CastCharacterStyled,
} from "./Cast.styled";

export default function Cast() {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId)
      .then(setMovieCast)
      .catch((error) => toast("No results, please try again"));
  }, [movieId]);
  const hasMovieCast = movieCast?.cast?.length > 0;
  return (
    <CastDivStyled id="cast">
      {hasMovieCast ? (
        <CastListStyled>
          {movieCast.cast.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              {profile_path ? (
                <CastImgStyled
                  width={200}
                  height="auto"
                  src={makeImagePath(profile_path)}
                  alt={name || "actor image"}
                />
              ) : (
                <PlaceholderIcon width="200" height="300" fill="white" />
              )}
              <CastNameStyled>{name}</CastNameStyled>
              <CastCharacterStyled>Character: {character}</CastCharacterStyled>
            </li>
          ))}
        </CastListStyled>
      ) : (
        <div>
          <p>We don't have cast information about this movie</p>
        </div>
      )}
    </CastDivStyled>
  );
}
