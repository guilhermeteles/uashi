import { useEffect, useRef, useState } from 'react';
import { Section } from '../../components/ui/Layout';
import { SectionHeading } from '../components/SectionHeading';
import { Icon } from '../../components/ui/Icon';
import styles from './ComoFunciona.module.css';

const steps = [
  { k: 'Passo 1', t: 'CHEGOU', d: 'Dirija até uma unidade Uashi. Sem agendamento, sem fila.', icon: 'hugeicons:car-01' },
  { k: 'Passo 2', t: 'ABRIU O APP', d: 'Selecione o tipo de lavagem e seu veículo no app.', icon: 'hugeicons:mobile-navigator-01' },
  { k: 'Passo 3', t: 'GEROU O QR', d: 'Mostre o QR code para o leitor na entrada da esteira.', icon: 'hugeicons:qr-code-01' },
  { k: 'Passo 4', t: 'PASSOU PELA ESTEIRA', d: 'Mantenha o ponto morto. A esteira cuida do resto.', icon: 'hugeicons:car-01' },
  { k: 'Passo 5', t: 'FOI EMBORA', d: 'Carro limpo em menos de 5 minutos. Pronto!', icon: 'hugeicons:checkmark-circle-02' },
];

export function ComoFunciona() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const fillPct = steps.length > 1 ? (active / (steps.length - 1)) * 100 : 0;

  return (
    <Section id="como-funciona" glow="blue">
      <SectionHeading
        eyebrow="Simples assim"
        eyebrowTone="blue"
        title="COMO FUNCIONA"
        subtitle="Do volante ao carro limpo em menos de 5 minutos — como passar por um túnel de lavagem."
      />

      <div className={styles.tunnel}>
        <div className={`${styles.side} ${styles.left}`} aria-hidden="true">
          <span className={styles.brush} />
          <span className={styles.brush} />
          <span className={styles.brush} />
        </div>

        <div className={styles.lane}>
          <div className={styles.sprays} aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <i key={i} />
            ))}
          </div>

          <div className={styles.steps}>
            <div className={styles.line}>
              <div
                className={styles.lineFill}
                style={{ '--pct': `${fillPct}%` } as React.CSSProperties}
              />
            </div>
            {steps.map((s, i) => (
              <button
                key={s.t}
                className={`${styles.step} ${i === active ? styles.isActive : ''}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => (paused.current = true)}
                onMouseLeave={() => (paused.current = false)}
              >
                <span className={styles.dot}>
                  <Icon icon={s.icon} />
                </span>
                <span className={styles.body}>
                  <span className={styles.stepK}>{s.k}</span>
                  <span className={styles.stepT}>{s.t}</span>
                  <span className={styles.stepD}>{s.d}</span>
                </span>
              </button>
            ))}
          </div>

          <div className={styles.conveyor} aria-hidden="true" />
        </div>

        <div className={`${styles.side} ${styles.right}`} aria-hidden="true">
          <span className={styles.brush} />
          <span className={styles.brush} />
          <span className={styles.brush} />
        </div>
      </div>
    </Section>
  );
}
