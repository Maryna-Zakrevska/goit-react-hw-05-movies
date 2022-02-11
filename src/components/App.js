import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalLayout from "./GlobalLayout/GlobalLayout";
import { makeChunk } from "utils/makeChunk";
import { Status } from "utils/makeChunk";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

const HomePage = makeChunk("HomePage");
const MoviesPage = makeChunk("MoviesPage");
const NotFound = makeChunk("NotFound");

export const App = () => {
  const [page] = useState(1);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(Status.IDLE);

  return (
    <div className="App">
      <Suspense fallback={<p>Just loading...</p>}>
        <Routes>
          <Route path="/" element={<GlobalLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="movies/*"
              element={
                <MoviesPage
                  onSubmit={setQuery}
                  status={status}
                  query={query}
                  page={page}
                  setStatus={setStatus}
                />
              }
            />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
