import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getTrendingDayMovies } from "services/movie-api";
import ListItem from "components/ListItem/ListItem";
import PropTypes from "prop-types";
import { HomeListStyled, HomeListDivStyled } from "./HomePage.styled";

export default function HomePage({ page }) {
  const [trending, setTrending] = useState(null);
  useEffect(() => {
    getTrendingDayMovies(page)
      .then(setTrending)
      .catch((error) => toast("No results, please try again"));
  }, [page]);
  const hasTrendingMovies = trending?.results?.length > 0;
  return (
    <HomeListDivStyled>
      <HomeListStyled>
        {hasTrendingMovies &&
          trending.results.map((item) => <ListItem key={item.id} item={item} />)}
      </HomeListStyled>
    </HomeListDivStyled>
  );
}

HomePage.propTypes = {
  page: PropTypes.number.isRequired,
};
