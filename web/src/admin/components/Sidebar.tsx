import { NavLink } from 'react-router-dom';
import { Icon } from '../../components/ui/Icon';
import styles from './Sidebar.module.css';

type Item = { to: string; label: string; icon: string; badge?: string; end?: boolean };
type NavGroup = { label: string; items: Item[] };

const groups: NavGroup[] = [
  {
    label: 'Principal',
    items: [
      { to: '/admin', label: 'Dashboard', icon: 'hugeicons:analytics-01', end: true },
      { to: '/admin/franqueados', label: 'Franqueados', icon: 'hugeicons:store-01' },
      { to: '/admin/planos', label: 'Planos / Preços', icon: 'hugeicons:credit-card' },
      { to: '/admin/promocoes', label: 'Promoções', icon: 'hugeicons:zap' },
    ],
  },
  {
    label: 'Operações',
    items: [
      { to: '/admin/alertas', label: 'Alertas', icon: 'hugeicons:notification-01', badge: '5' },
      { to: '/admin/chamados', label: 'Chamados', icon: 'hugeicons:ticket-01', badge: '12' },
      { to: '/admin/relatorios', label: 'Relatórios', icon: 'hugeicons:analytics-01' },
    ],
  },
  {
    label: 'Conta',
    items: [{ to: '/admin/perfil', label: 'Perfil', icon: 'hugeicons:user' }],
  },
];

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/uashi-logo.svg" alt="Uashi" />
      </div>
      <div className={styles.profile}>
        <div className={styles.avatar}>AM</div>
        <div>
          <div className={styles.name}>Admin Matriz</div>
          <div className={styles.role}>Acesso total</div>
        </div>
      </div>

      <nav className={styles.nav}>
        {groups.map((g) => (
          <div key={g.label}>
            <div className={styles.sectionLabel}>{g.label}</div>
            {g.items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                end={it.end}
                className={({ isActive }) =>
                  `${styles.item} ${isActive ? styles.active : ''}`
                }
              >
                <span className={styles.icon}>
                  <Icon icon={it.icon} />
                </span>
                {it.label}
                {it.badge && <span className={styles.badge}>{it.badge}</span>}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className={styles.footer}>
        <a href="#" className={styles.item} style={{ padding: '8px 0', fontSize: '0.78rem' }}>
          <span className={styles.icon}>
            <Icon icon="hugeicons:logout-01" />
          </span>
          Sair
        </a>
      </div>
    </aside>
  );
}
