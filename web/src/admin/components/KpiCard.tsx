import { Icon } from '../../components/ui/Icon';
import styles from './KpiCard.module.css';

export type Kpi = {
  value: string;
  label: string;
  delta: string;
  direction?: 'up' | 'down';
  valueColor?: string;
  highlight?: boolean;
};

export function KpiCard({ value, label, delta, direction = 'up', valueColor, highlight }: Kpi) {
  return (
    <div className={`${styles.card} ${highlight ? styles.highlight : ''}`}>
      <div className={styles.value} style={valueColor ? { color: valueColor } : undefined}>
        {value}
      </div>
      <div className={styles.label}>{label}</div>
      <div className={`${styles.delta} ${direction === 'up' ? styles.up : styles.down}`}>
        <Icon icon={direction === 'up' ? 'hugeicons:arrow-up-01' : 'hugeicons:arrow-down-01'} />
        {delta}
      </div>
    </div>
  );
}
