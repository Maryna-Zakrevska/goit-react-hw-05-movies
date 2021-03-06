import {
  MovieDetailsPageDivStyled,
  GoBackButton,
  MovieImageStyled,
  MovieInfoDivStyled,
  TitleMovieStyled,
  MovieAddInfoDivStyled,
  AddInfoListStyled,
  NavLink,
} from "./MovieDetailsPage.styled";
import React, { useState, useEffect, useRef } from "react";
import { getMovieDetails } from "services/movie-api";
import { toast } from "react-toastify";
import { useParams, useLocation, Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as PlaceholderIcon } from "image/placeholder.svg";
export { PlaceholderIcon };

export function makeImagePath(image = "") {
  return image && `https://image.tmdb.org/t/p/w342${image}`;
}

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState({
    poster_path: "",
    original_title: "",
    title: "",
    genres: [],
    vote_average: 0,
    overview: "",
    release_date: "",
  });
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovieDetails)
      .catch((error) => toast("No results, please try again"));
  }, [movieId]);

  const location = useLocation();
  const prevLocation = useRef(location);
  const nav = useNavigate();

  const { poster_path, original_title, title, genres, vote_average, overview, release_date } =
    movieDetails;
  const releaseDate = `(${release_date?.slice(0, 4)})`;
  const genresNames = genres?.length > 0 ? genres.map(({ name }) => name).join(", ") : "";

  const goBack = () => {
    nav(prevLocation?.current?.state?.from ?? "/");
  };

  return (
    <>
      <GoBackButton type="button" onClick={goBack}>
        &lArr; Go back
      </GoBackButton>
      <MovieDetailsPageDivStyled>
        <div>
          {poster_path ? (
            <MovieImageStyled
              src={makeImagePath(poster_path)}
              alt={title || original_title || "poster image"}
            />
          ) : (
            <PlaceholderIcon width="121" height="121" fill="white" />
          )}
        </div>

        <MovieInfoDivStyled>
          <TitleMovieStyled>
            {title || original_title || "Title"} <span>{releaseDate}</span>
          </TitleMovieStyled>
          <p>User Score: {vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresNames}</p>
        </MovieInfoDivStyled>
      </MovieDetailsPageDivStyled>
      <MovieAddInfoDivStyled>
        <h3>Additional information</h3>
        <AddInfoListStyled>
          <li>
            <NavLink to="cast#cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews#reviews">Reviews</NavLink>
          </li>
        </AddInfoListStyled>
      </MovieAddInfoDivStyled>
      <Outlet />
    </>
  );
}
