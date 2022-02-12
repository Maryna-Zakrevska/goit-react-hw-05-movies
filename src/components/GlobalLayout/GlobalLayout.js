import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

export default function GlobalLayout() {
  const location = useLocation();
  const prevLocation = { from: location};
  return (
    <>
      <h1>Welcome to the app!</h1>
      <nav>
        <NavLink to="/" state={prevLocation}>Home</NavLink>
        <NavLink to="movies" state={prevLocation}>Movies</NavLink>
      </nav>
      <main>
      <ToastContainer autoClose={3000} />
        <Outlet />
      </main>
    </>
  );
}