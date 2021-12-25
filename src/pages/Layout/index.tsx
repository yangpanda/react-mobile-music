import Tabbar from '@/components/Tabbar';
import { Outlet } from 'react-router-dom';
import styles from './style.module.css';

function Layout() {
  return (
    <div className={styles.layout}>
      <Outlet></Outlet>
      <Tabbar></Tabbar>
    </div>
  );
}

export default Layout;
