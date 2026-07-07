import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import styles from './AdminLayout.module.css';

export function AdminLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <Topbar title="Dashboard · Matriz" />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
