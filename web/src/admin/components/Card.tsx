import type { CSSProperties, ReactNode } from 'react';
import styles from './Card.module.css';

export function Card({
  title,
  aside,
  children,
  style,
  bodyStyle,
}: {
  title?: string;
  aside?: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
}) {
  return (
    <div className={styles.card} style={style}>
      {(title || aside) && (
        <div className={styles.header}>
          {title && <span className={styles.title}>{title}</span>}
          {aside}
        </div>
      )}
      <div className={styles.body} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}
