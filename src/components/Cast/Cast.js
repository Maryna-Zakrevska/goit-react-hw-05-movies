import React, { useState } from "react";
import { useEffect } from "react";
import { getMovieCredits } from "services/movie-api";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { makeImagePath } from "components/MovieDetailsPage/MovieDetailsPage";
import { PlaceholderIcon } from "components/MovieDetailsPage/MovieDetailsPage";


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
    <div>
      {hasMovieCast ? (
        <ul>
          {movieCast.cast.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  width={121}
                  height="auto"
                  src={makeImagePath(profile_path)}
                  alt={name || "actor image"}
                />
              ) : (
                <PlaceholderIcon width="121" height="121" fill="white" />
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>We don't have cast information about this movie</p>
        </div>
      )}
    </div>
  );
}