import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";
import ListItem from "components/ListItem/ListItem";
import { Status } from "utils/makeChunk";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import {
  SearchbarStyled,
  SearchFormStyled,
  SearchFormButtonStyled,
  SearchFormButtonSpanStyled,
  SearchFormInputStyled,
  SearchFormButtonLabelStyled,
} from "./MoviesPage.styled";
import { getSearchMovies } from "services/movie-api";

function Searchbar({ status }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setSearchParams] = useSearchParams();
  
  const inputQueryChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const formQuery = searchQuery.trim();
    if (formQuery === "") {
      setSearchParams({});
      toast.error("Please type your query request");
      return;
    }
    setSearchParams({ query: formQuery });
    setSearchQuery("");
  };

  return (
    <SearchbarStyled>
      <SearchFormStyled onSubmit={formSubmit}>
        <SearchFormButtonLabelStyled>
          <SearchFormInputStyled
            name="searchQuery"
            value={searchQuery}
            onChange={inputQueryChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </SearchFormButtonLabelStyled>
        <SearchFormButtonStyled type="submit" disabled={status === "pending"}>
          <FaSearch />
          <SearchFormButtonSpanStyled>Search</SearchFormButtonSpanStyled>
        </SearchFormButtonStyled>
      </SearchFormStyled>
    </SearchbarStyled>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  status: PropTypes.string,
};

export default function MoviesPage({ onSubmit, status, page, setStatus }) {
  const [searchMovies, setSearchMovies] = useState(null);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query === "") {
      return;
    }
    setStatus(Status.PENDING);
    getSearchMovies(query, page)
      .then((newSearchMovies) => {
        if (!newSearchMovies?.results?.length) {
          toast(`No results for ${query}`);
        }
        setSearchMovies(newSearchMovies);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => toast("No results, please try again"));
  }, [page, query, setStatus]);

  useEffect(() => {
    return () => {
      setSearchMovies(null);
    };
  }, []);

  const hasRequestMovies = searchMovies?.results?.length > 0;
  const goBackURL = location?.state?.from ?? "/";
  return (
    <div>
      <Searchbar onSubmit={onSubmit} status={status} />
      <Link to={goBackURL}>&lArr; Go back</Link>
      <ul>
        {hasRequestMovies &&
          searchMovies.results.map((item) => <ListItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
}

MoviesPage.propTypes = {
  onSubmit: PropTypes.func,
  status: PropTypes.string,
  query: PropTypes.string,
  page: PropTypes.number,
  setStatus: PropTypes.func,
};
