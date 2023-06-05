import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";

export const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <nav className={css.nav}>
            <NavLink
              className={`${css.link} ${location.pathname === "/" ? css.active : ""}`}
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className={`${css.link} ${location.pathname === "/tweets" ? css.active : ""}`}
              to="/tweets"
            >
              TWEETS
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer className={css.footer}></footer>
    </>
  );
};
// className={`${css.button} ${isFollowing ? css.active : ''} `}
