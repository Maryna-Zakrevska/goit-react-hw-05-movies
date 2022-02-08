import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getTrendingDayMovies } from "services/movie-api";
import { ListItem } from "components/ListItem/ListItem";

export const HomePage = ({ page }) => {
  const [trending, setTrending] = useState(null);
  useEffect(() => {
    getTrendingDayMovies(page)
      .then(setTrending)
      .catch((error) => toast("No results, please try again"));
  }, [page]);
  const hasTrendingMovies = trending?.length > 0;
  return (
    <div>
      <ul>{hasTrendingMovies && trending.map((item) => <ListItem key={item.id} item={item} />)}</ul>
    </div>
  );
};
