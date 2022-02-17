import { Outlet, useLocation  } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LayoutNavStyled, NavLink } from "./GlobalLayout.styled";

export default function GlobalLayout() {
  const location = useLocation();
  const prevLocation = { from: location };
  return (
    <>
      <LayoutNavStyled>
        <NavLink to="/" state={prevLocation}>
          Home
        </NavLink>
        <NavLink to="movies" state={prevLocation}>
          Movies
        </NavLink>
      </LayoutNavStyled>
      <main>
        <ToastContainer autoClose={3000} />
        <Outlet />
      </main>
    </>
  );
}
