import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './CommonLayout.module.css';

const CommonLayout = () => {
  return (
    <>
      <header className={css.navi}>
        <nav className={css.link}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main className={css.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default CommonLayout;
