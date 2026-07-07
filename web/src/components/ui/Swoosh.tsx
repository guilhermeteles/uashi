import type { CSSProperties } from 'react';
import styles from './Swoosh.module.css';

/** Divisor "swoosh" com eco em camadas nas cores da marca. */
export function Swoosh({ size = 'full', style }: { size?: 'full' | 'sm'; style?: CSSProperties }) {
  return <hr className={size === 'sm' ? styles.sm : styles.full} style={style} />;
}
