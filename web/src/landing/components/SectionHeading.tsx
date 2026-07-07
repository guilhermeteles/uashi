import { Tag } from '../../components/ui/Tag';
import styles from './SectionHeading.module.css';

type Tone = 'gold' | 'red' | 'blue' | 'green';

export function SectionHeading({
  eyebrow,
  eyebrowTone = 'blue',
  title,
  subtitle,
  narrow,
}: {
  eyebrow?: string;
  eyebrowTone?: Tone;
  title: string;
  subtitle?: string;
  narrow?: boolean;
}) {
  return (
    <div className={styles.wrap}>
      {eyebrow && (
        <Tag tone={eyebrowTone} style={{ marginBottom: 12 }}>
          {eyebrow}
        </Tag>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && (
        <p className={styles.subtitle} style={narrow ? { maxWidth: 480 } : undefined}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
