import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <nav className={css.nav}>
            <NavLink className={css.link} to="/">
              HOME
            </NavLink>
            <NavLink className={css.link} to="/tweets">
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
