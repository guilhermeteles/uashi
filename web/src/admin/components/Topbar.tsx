import { Icon } from '../../components/ui/Icon';
import styles from './Topbar.module.css';

export function Topbar({ title }: { title: string }) {
  return (
    <header className={styles.topbar}>
      <span className={styles.title}>{title}</span>
      <div className={styles.actions}>
        <button className={styles.btn} title="Alertas">
          <Icon icon="hugeicons:notification-01" />
          <span className={styles.dot} />
        </button>
        <div className={styles.avatar}>AM</div>
        <a href="#" className={styles.logout}>
          Sair
        </a>
      </div>
    </header>
  );
}
