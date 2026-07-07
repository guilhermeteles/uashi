import type { CSSProperties, ReactNode } from 'react';
import styles from './Tag.module.css';

type Tone = 'gold' | 'red' | 'blue' | 'green' | 'muted';

export function Tag({
  tone = 'blue',
  children,
  className,
  style,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span className={[styles.tag, styles[tone], className].filter(Boolean).join(' ')} style={style}>
      {children}
    </span>
  );
}
