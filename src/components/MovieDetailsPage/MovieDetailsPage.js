import React from "react";
import { useState, useEffect } from "react";
import { getMovieDetails } from "services/movie-api";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function makeImagePath(image = "") {
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
    getMovieDetails(movieId )
      .then(setMovieDetails)
      .catch((error) => toast("No results, please try again"));
  }, [movieId ]);
  
  const location = useLocation();

  const { poster_path, original_title, title, genres, vote_average, overview, release_date } =
    movieDetails;
  const releaseDate = `(${release_date?.slice(0, 4)})`;
  const genresNames = genres?.length > 0 ? genres.map(({ name }) => name).join(", ") : "";
  const goBackURL = location?.state?.from ?? "/";

  return (
    <div>
      <Link to={goBackURL}>&lArr; Go back</Link>
      <div>
        <img src={makeImagePath(poster_path)} alt={title || original_title || "poster image"} />
      </div>

      <div>
        <h1>
          {title || original_title || "Title"} <span>{releaseDate}</span>
        </h1>
        <p>User Score: {vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresNames}</p>
      </div>
    </div>
  );
}
