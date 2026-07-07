import { Section } from '../../components/ui/Layout';
import { SectionHeading } from '../components/SectionHeading';
import { Tag } from '../../components/ui/Tag';
import { Icon } from '../../components/ui/Icon';
import styles from './Precos.module.css';

type Price = { label: string; value: string; tone: 'cream' | 'gold' | 'blue' };
type Vehicle = {
  icon: string;
  name: string;
  examples: string;
  prices: Price[];
  featured?: boolean;
};

const vehicles: Vehicle[] = [
  {
    icon: 'hugeicons:car-01',
    name: 'HATCH / SEDAN',
    examples: 'Gol, Onix, Corolla...',
    prices: [
      { label: 'Simples', value: 'R$ 19', tone: 'cream' },
      { label: 'Completa', value: 'R$ 29', tone: 'gold' },
      { label: 'Premium', value: 'R$ 39', tone: 'blue' },
    ],
  },
  {
    icon: 'hugeicons:car-02',
    name: 'SUV / PICKUP',
    examples: 'Compass, Hilux, SW4...',
    featured: true,
    prices: [
      { label: 'Simples', value: 'R$ 25', tone: 'cream' },
      { label: 'Completa', value: 'R$ 35', tone: 'gold' },
      { label: 'Premium', value: 'R$ 48', tone: 'blue' },
    ],
  },
  {
    icon: 'hugeicons:bus-01',
    name: 'VAN / MINIVAN',
    examples: 'Sprinter, Master, Jumper...',
    prices: [
      { label: 'Simples', value: 'R$ 35', tone: 'cream' },
      { label: 'Completa', value: 'R$ 48', tone: 'gold' },
      { label: 'Premium', value: 'R$ 65', tone: 'blue' },
    ],
  },
  {
    icon: 'hugeicons:motorbike-01',
    name: 'MOTO',
    examples: 'Qualquer cilindrada',
    prices: [
      { label: 'Simples', value: 'R$ 12', tone: 'cream' },
      { label: 'Completa', value: 'R$ 18', tone: 'gold' },
    ],
  },
];

const toneColor: Record<Price['tone'], string> = {
  cream: '#0d0d0d',
  gold: 'var(--gold)',
  blue: 'var(--blue)',
};

function PriceCard({ vehicle }: { vehicle: Vehicle }) {
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div
      className={`${styles.card} ${vehicle.featured ? styles.featured : ''}`}
      onPointerMove={onMove}
    >
      {vehicle.featured && (
        <Tag tone="gold" className={styles.popular}>
          Mais popular
        </Tag>
      )}
      <div className={styles.icon}>
        <Icon icon={vehicle.icon} />
      </div>
      <h3 className={styles.name}>{vehicle.name}</h3>
      <p className={styles.examples}>{vehicle.examples}</p>
      <hr className={styles.rule} />
      <div className={styles.prices}>
        {vehicle.prices.map((p) => (
          <div key={p.label} className={styles.priceRow}>
            <span className={styles.priceLabel}>{p.label}</span>
            <span className={styles.priceValue} style={{ color: toneColor[p.tone] }}>
              {p.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Precos() {
  return (
    <Section id="precos" charcoal glow="gold">
      <SectionHeading
        eyebrow="Sem mensalidade"
        eyebrowTone="gold"
        title="LAVAGEM AVULSA"
        subtitle="Pague só quando usar. Escolha o tipo de lavagem para seu veículo."
        narrow
      />
      <div className={styles.grid}>
        {vehicles.map((v) => (
          <PriceCard key={v.name} vehicle={v} />
        ))}
      </div>
      <p className={styles.note}>
        * Valores ilustrativos para aprovação do protótipo. Preços reais a definir.
      </p>
    </Section>
  );
}
