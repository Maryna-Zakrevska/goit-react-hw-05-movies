import { NavLink, Outlet } from 'react-router-dom';

export default function GlobalLayout() {
  return (
    <>
      <h1>Welcome to the app!</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}