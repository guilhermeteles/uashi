import { Section } from '../../components/ui/Layout';
import { Tag } from '../../components/ui/Tag';
import { StoreBadge } from '../../components/ui/StoreBadge';
import { Icon } from '../../components/ui/Icon';
import { PhoneMockup } from '../components/PhoneMockup';
import styles from './BaixarApp.module.css';

const features = ['Push notifications', 'Instalável (PWA)', 'iOS 16.4+ / Android'];

export function BaixarApp() {
  return (
    <Section id="app" glow="gold" className={styles.patGrid}>
      <div className={styles.grid}>
        <div className={styles.mockups}>
          <PhoneMockup style={{ marginTop: 40 }} />
          <PhoneMockup>
            <LoyaltyScreen />
          </PhoneMockup>
        </div>

        <div>
          <Tag tone="red" style={{ marginBottom: 16 }}>
            Disponível agora
          </Tag>
          <h2 className={styles.title}>
            BAIXE O APP
            <br />
            UASHI
          </h2>
          <p className={styles.lead}>
            Gerencie lavagens, créditos, dependentes e muito mais. iOS e Android, instalável como app
            nativo.
          </p>
          <div className={styles.badges}>
            <StoreBadge store="ios" />
            <StoreBadge store="android" />
          </div>
          <div className={styles.features}>
            {features.map((f) => (
              <div key={f} className={styles.feature}>
                <span style={{ color: 'var(--green)' }}>
                  <Icon icon="hugeicons:tick-01" />
                </span>{' '}
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function LoyaltyScreen() {
  return (
    <div className={styles.loyalty}>
      <div className={styles.loyaltyTop}>Fidelidade</div>
      <div className={styles.loyaltyPoints}>1.240</div>
      <div className={styles.loyaltyLabel}>pontos acumulados</div>
      <div className={styles.loyaltyBar}>
        <span style={{ width: '68%' }} />
      </div>
      <div className={styles.loyaltyNext}>Faltam 360 pts para lavagem grátis</div>
    </div>
  );
}
