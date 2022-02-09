import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalLayout from "./GlobalLayout/GlobalLayout";
import { makeChunk } from "utils/makeChunk";
import { Status } from "utils/makeChunk";

const HomePage = makeChunk('HomePage');
const MoviesPage = makeChunk('MoviesPage');
const NotFound = makeChunk('NotFound');

export const App = () => {
  const [page] = useState(1);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(Status.IDLE);
  return (
    <div className="App">
      <Suspense fallback={<p>Just loading...</p>}>
        <Routes>
          <Route path="/" element={<GlobalLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="movies/*"
              element={<MoviesPage onSubmit={setQuery} status={status} query={query} page={page} setStatus={setStatus} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
