import { Section } from '../../components/ui/Layout';
import { Tag } from '../../components/ui/Tag';
import styles from './Lojas.module.css';

type Unit = { name: string; address: string; status: string; open: boolean };

const units: Unit[] = [
  { name: 'Mooca', address: 'R. da Mooca, 1420', status: 'Aberta · ~3 min', open: true },
  { name: 'Tatuapé', address: 'Av. Radial Leste, 3200', status: 'Aberta · ~6 min', open: true },
  { name: 'Santo André', address: 'Av. Industrial, 880', status: 'Aberta · ~2 min', open: true },
  { name: 'Guarulhos Centro', address: 'R. Sete de Setembro, 610', status: 'Fechada agora', open: false },
  { name: 'Osasco', address: 'Av. Presidente Vargas, 540', status: 'Aberta · ~5 min', open: true },
];

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117967.95068890978!2d-46.73337779902344!3d-23.588880099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sSão%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1718000000000';

export function Lojas() {
  return (
    <Section id="lojas" band glow="green">
      <div className={styles.grid}>
        <div>
          <Tag tone="green" style={{ marginBottom: 12 }}>
            8 unidades abertas
          </Tag>
          <h2 className={styles.title}>ENCONTRE UMA UNIDADE</h2>
          <p className={styles.subtitle}>
            Todas as unidades operam 24h durante a semana. Finais de semana até as 22h.
          </p>

          <div className={styles.list}>
            {units.map((u) => (
              <div key={u.name} className={styles.unit}>
                <div className={styles.unitInfo}>
                  <div className={styles.thumb} aria-hidden="true">
                    {u.name.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.unitName}>{u.name}</div>
                    <div className={styles.unitAddr}>{u.address}</div>
                  </div>
                </div>
                <div
                  className={styles.status}
                  style={{ color: u.open ? 'var(--green)' : 'var(--red)' }}
                >
                  <span className={u.open ? styles.dotOpen : styles.dotClosed} /> {u.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.map}>
          <iframe
            src={MAP_SRC}
            title="Mapa das unidades Uashi"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
