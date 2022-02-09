import { Link } from "react-router-dom";

export default function ListItem({
  item: {
    /* id, */
    /* genre_ids,
    poster_path,
    overview, */
    title,
    name,
    /* backdrop_path,
    release_date,
    vote_average,
    vote_count,
    popularity, */
  },
})  {
  /* const genres = genre_ids.join(""); */
  return <li><Link to='/movies/:movieId'>{title||name}</Link></li>;
};
