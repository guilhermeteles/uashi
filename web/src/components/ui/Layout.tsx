import type { CSSProperties, ReactNode } from 'react';
import styles from './Layout.module.css';

/** Container central com largura máxima (1200px). */
export function Container({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={[styles.container, className].filter(Boolean).join(' ')} style={style}>
      {children}
    </div>
  );
}

type SectionGlow = 'blue' | 'gold' | 'green' | 'red';

/** Seção da landing com ritmo de bandas e glow de canto opcional. */
export function Section({
  children,
  id,
  band,
  glow,
  charcoal,
  className,
  style,
}: {
  children: ReactNode;
  id?: string;
  band?: boolean;
  glow?: SectionGlow;
  charcoal?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const cls = [
    styles.section,
    band ? styles.band : '',
    charcoal ? styles.charcoal : '',
    glow ? styles[`glow-${glow}`] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <section id={id} className={cls} style={style}>
      <Container>{children}</Container>
    </section>
  );
}
