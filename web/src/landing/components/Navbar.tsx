import { Swoosh } from '../../components/ui/Swoosh';
import { Button } from '../../components/ui/Button';
import styles from './Navbar.module.css';

const links = [
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#precos', label: 'Preços' },
  { href: '#planos', label: 'Planos' },
  { href: '#lojas', label: 'Lojas' },
];

export function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <a href="#top" className={styles.logo}>
            <img src="/uashi-logo.svg" alt="Uashi" />
          </a>

          <div className={styles.links}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </a>
            ))}
            <a href="#frota" className={styles.link} style={{ color: 'var(--blue)' }}>
              Frotas
            </a>
            <a href="#franquia" className={styles.link} style={{ color: 'var(--gold)' }}>
              Franquia
            </a>
          </div>

          <Button as="a" href="#app" variant="primary" className={styles.cta}>
            Baixar App
          </Button>
        </div>
      </nav>
      <Swoosh />
    </>
  );
}
