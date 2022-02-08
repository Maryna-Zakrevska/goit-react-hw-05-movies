export const ListItem = ({
  item: {
    /* id, */
    /* genre_ids,
    poster_path,
    overview, */
    title,
    /* backdrop_path,
    release_date,
    vote_average,
    vote_count,
    popularity, */
  },
}) => {
  /* const genres = genre_ids.join(""); */
  return <li><p>{title}</p></li>;
};
