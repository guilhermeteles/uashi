import type { ReactNode } from 'react';
import styles from './PhoneMockup.module.css';

/**
 * Moldura de celular. No protótipo estático o miolo era um <iframe> do app
 * Flutter; aqui recebe `children` (uma tela estilizada) para ficar autocontido.
 */
export function PhoneMockup({ children, style }: { children?: ReactNode; style?: React.CSSProperties }) {
  return (
    <div className={styles.mockup} style={style}>
      <div className={styles.screen}>{children ?? <DefaultScreen />}</div>
    </div>
  );
}

function DefaultScreen() {
  return (
    <div className={styles.appScreen}>
      <div className={styles.appTop}>Uashi</div>
      <div className={styles.qr} aria-hidden="true">
        <div className={styles.qrGrid}>
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} data-on={(i * 7) % 3 === 0 ? '1' : '0'} />
          ))}
        </div>
      </div>
      <div className={styles.appLabel}>QR pronto · válido 30 min</div>
      <div className={styles.appPill}>Plano Pro · Motorista</div>
    </div>
  );
}
