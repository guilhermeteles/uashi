import { Section } from '../../components/ui/Layout';
import { SectionHeading } from '../components/SectionHeading';
import { Tag } from '../../components/ui/Tag';
import { Button } from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import styles from './Planos.module.css';

type Feature = { text: string; included: boolean; strong?: boolean };
type Plan = {
  tone: 'blue' | 'gold';
  badge: string;
  price: string;
  cycle: string;
  desc: string;
  features: Feature[];
  cta: { label: string; variant: 'primary' | 'secondary' | 'gold'; blue?: boolean };
  featured?: boolean;
  accent?: string;
};

const plans: Plan[] = [
  {
    tone: 'blue',
    badge: 'Básico',
    price: 'R$ 79',
    cycle: '/mês · cobrado mensalmente',
    desc: 'Ideal para uso pessoal regular.',
    features: [
      { text: '8 lavagens simples / mês', included: true },
      { text: 'Válido em todas as unidades', included: true },
      { text: 'App + QR code', included: true },
      { text: 'Horário estendido', included: false },
      { text: 'Dependentes', included: false },
    ],
    cta: { label: 'Assinar Básico', variant: 'secondary' },
  },
  {
    tone: 'gold',
    badge: 'Pro · Motorista',
    price: 'R$ 149',
    cycle: '/mês · cobrado mensalmente',
    desc: 'Uber, 99, iFood, InDriver e taxistas.',
    featured: true,
    accent: 'var(--gold)',
    features: [
      { text: '1 lavagem completa por dia', included: true, strong: true },
      { text: 'Horário estendido (5h–23h)', included: true },
      { text: 'Fila preferencial', included: true },
      { text: 'Todas as unidades', included: true },
      { text: 'Pontos em dobro (fidelidade)', included: true },
    ],
    cta: { label: 'Assinar Pro', variant: 'gold' },
  },
  {
    tone: 'blue',
    badge: 'Frota · B2B',
    price: 'R$ 89',
    cycle: '/veículo/mês · fatura consolidada',
    desc: 'Empresas, aplicativos e transportadoras.',
    accent: 'var(--blue)',
    features: [
      { text: 'A partir de 5 veículos', included: true },
      { text: '1 lavagem completa / veículo / dia', included: true, strong: true },
      { text: 'Painel admin dedicado', included: true },
      { text: 'Nota fiscal por frota', included: true },
      { text: 'Limite por motorista', included: true },
    ],
    cta: { label: 'Falar com Comercial', variant: 'secondary', blue: true },
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
      {plan.featured && (
        <div className={styles.ribbon}>
          <Tag tone="gold">
            <Icon icon="hugeicons:star" style={{ color: '#f5b301' }} /> Mais escolhido
          </Tag>
        </div>
      )}
      <div
        className={styles.header}
        style={plan.accent ? { borderTop: `3px solid ${plan.accent}`, paddingTop: plan.featured ? 32 : undefined } : undefined}
      >
        <Tag tone={plan.tone} style={{ marginBottom: 12 }}>
          {plan.badge}
        </Tag>
        <div className={styles.price} style={{ color: plan.accent ?? 'var(--cream)' }}>
          {plan.price}
        </div>
        <div className={styles.cycle}>{plan.cycle}</div>
        <p className={styles.desc}>{plan.desc}</p>
      </div>
      <div className={styles.body}>
        <ul className={styles.features}>
          {plan.features.map((f) => (
            <li key={f.text} className={styles.feature} style={{ color: f.included ? 'var(--cream)' : 'var(--muted)' }}>
              <span style={{ color: f.included ? 'var(--green)' : 'var(--muted)' }}>
                {f.included ? <Icon icon="hugeicons:tick-01" /> : '–'}
              </span>
              {f.strong ? <strong>{f.text}</strong> : f.text}
            </li>
          ))}
        </ul>
        <Button
          as="a"
          href="#cadastro"
          variant={plan.cta.variant}
          fullWidth
          className={plan.cta.blue ? styles.blueCta : undefined}
        >
          {plan.cta.label}
        </Button>
      </div>
    </div>
  );
}

export function Planos() {
  return (
    <Section id="planos" glow="blue">
      <SectionHeading
        eyebrow="Economize todo mês"
        eyebrowTone="blue"
        title="PLANOS DE ASSINATURA"
        subtitle="Lave todo dia se quiser. Planos pensados para quem vive na estrada."
        narrow
      />
      <div className={styles.grid}>
        {plans.map((p) => (
          <PlanCard key={p.badge} plan={p} />
        ))}
      </div>
    </Section>
  );
}
