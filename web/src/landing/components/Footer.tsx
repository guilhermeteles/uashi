import { Link } from 'react-router-dom';
import { Swoosh } from '../../components/ui/Swoosh';
import styles from './Footer.module.css';

const columns = [
  {
    title: 'APP',
    links: [
      { label: 'Baixar iOS', href: '#app' },
      { label: 'Baixar Android', href: '#app' },
      { label: 'Criar conta', href: '#cadastro' },
      { label: 'Planos', href: '#planos' },
    ],
  },
  {
    title: 'EMPRESA',
    links: [
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Nossas unidades', href: '#lojas' },
      { label: 'Seja franqueado', href: '#franquia', gold: true },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'CONTATO',
    links: [
      { label: 'oi@uashi.com.br', href: 'mailto:oi@uashi.com.br' },
      { label: '(11) 0000-0000', href: 'tel:+5511000000000' },
      { label: 'Suporte no App', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <img src="/uashi-logo.svg" alt="Uashi" className={styles.brandLogo} />
            <Swoosh size="sm" style={{ marginBottom: 16 }} />
            <p className={styles.brandText}>
              Lava-jato self service em esteira. Tecnologia e agilidade para quem vive na estrada.
            </p>
            <div className={styles.social}>
              {['ig', 'fb', 'tk'].map((s) => (
                <a key={s} href="#" className={styles.socialLink}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              <ul className={styles.colList}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={styles.colLink}
                      style={l.gold ? { color: 'var(--gold)' } : undefined}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                {col.title === 'CONTATO' && (
                  <li>
                    <Link to="/admin" className={styles.colLink} style={{ fontSize: '0.7rem', color: 'rgba(107,107,107,0.6)' }}>
                      Área restrita
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2025 Uashi Tecnologia LTDA. Todos os direitos reservados.</p>
          <div className={styles.legal}>
            <a href="#">Termos de uso</a>
            <a href="#">Privacidade</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
