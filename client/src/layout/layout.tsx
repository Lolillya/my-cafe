import { Outlet } from '@tanstack/react-router';
import { NavBar } from '../components/navbar';

const Layout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
