import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GlobalLayout() {
  return (
    <>
      <h1>Welcome to the app!</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav>
      <main>
      <ToastContainer autoClose={3000} />
        <Outlet />
      </main>
    </>
  );
}