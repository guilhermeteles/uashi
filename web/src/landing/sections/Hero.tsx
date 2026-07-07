import { Fragment } from 'react';
import { Tag } from '../../components/ui/Tag';
import { Button } from '../../components/ui/Button';
import { StoreBadge } from '../../components/ui/StoreBadge';
import { Icon } from '../../components/ui/Icon';
import { PhoneMockup } from '../components/PhoneMockup';
import styles from './Hero.module.css';

const stats = [
  { value: '12K+', label: 'Usuários ativos' },
  { value: '8', label: 'Unidades abertas' },
  { value: '4.8', label: 'Avaliação nas lojas', star: true },
];

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.container}>
        <div>
          <Tag tone="red" style={{ marginBottom: 16 }}>
            Novo em São Paulo
          </Tag>
          <h1 className={styles.title}>
            LAVA CARRO
            <br />
            <span className="destaque">SEM SAIR</span>
            <br />
            DO VEÍCULO
          </h1>
          <p className={styles.lead}>
            Gere o QR code no app, passe pela esteira e siga viagem. Menos de 5 minutos. Sem fila. Sem
            complicação.
          </p>
          <p className={styles.sub}>
            Planos especiais para{' '}
            <strong style={{ color: 'var(--gold)' }}>taxistas, motoristas de app e frotas.</strong>
          </p>

          <div className={styles.badges}>
            <StoreBadge store="ios" href="#app" />
            <StoreBadge store="android" href="#app" />
            <Button as="a" href="#lojas" variant="secondary">
              Encontrar Loja
            </Button>
          </div>

          <div className={styles.proof}>
            {stats.map((s, i) => (
              <Fragment key={s.label}>
                {i > 0 && <div className={styles.sep} />}
                <div className={styles.stat}>
                  <div className={`${styles.statVal} glow-gold`}>
                    {s.value}
                    {s.star && <Icon icon="hugeicons:star" style={{ color: '#f5b301' }} />}
                  </div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        <div className={styles.phoneWrap}>
          <div className={styles.halo} />
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
