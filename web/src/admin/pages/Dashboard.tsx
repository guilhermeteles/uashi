import { KpiCard, type Kpi } from '../components/KpiCard';
import { Card } from '../components/Card';
import { Tag } from '../../components/ui/Tag';
import { Button } from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import styles from './Dashboard.module.css';

const kpis: Kpi[] = [
  { value: 'R$224K', label: 'Receita total / mês', delta: '+12% vs mês anterior', valueColor: 'var(--gold)', highlight: true },
  { value: '7.840', label: 'Lavagens / mês', delta: '+8% vs mês anterior' },
  { value: '12.480', label: 'Usuários ativos', delta: '+15% vs mês anterior' },
  { value: '4.320', label: 'Planos ativos', delta: '+22% vs mês anterior' },
  { value: 'R$28,60', label: 'Ticket médio', delta: '+3% vs mês anterior', valueColor: 'var(--blue)' },
  { value: '87', label: 'NPS', delta: '+5 pts vs mês anterior', valueColor: '#22c55e' },
];

type Bar = { day: string; value: string; pct: number; color: string; peak?: boolean; empty?: boolean };
const bars: Bar[] = [
  { day: 'Seg', value: 'R$28k', pct: 55, color: 'var(--red)' },
  { day: 'Ter', value: 'R$31k', pct: 62, color: 'var(--red)' },
  { day: 'Qua', value: 'R$34k', pct: 70, color: 'var(--red)' },
  { day: 'Qui', value: 'R$42k', pct: 85, color: 'var(--gold)' },
  { day: 'Sex', value: 'R$50k', pct: 100, color: 'var(--gold)', peak: true },
  { day: 'Sáb', value: 'R$38k', pct: 76, color: 'var(--blue)' },
  { day: 'Dom', value: 'R$22k', pct: 44, color: 'var(--surface-2)', empty: true },
];

type PlanDist = { name: string; count: string; pct: number; color: string };
const planDist: PlanDist[] = [
  { name: 'Básico · R$29/mês', count: '1.840', pct: 43, color: 'var(--red)' },
  { name: 'Plus · R$49/mês', count: '1.620', pct: 37, color: 'var(--gold)' },
  { name: 'Premium · R$79/mês', count: '860', pct: 20, color: 'var(--blue)' },
];

type Unit = {
  name: string;
  franchisee: string;
  washes: string;
  revenue: string;
  goal: string;
  progress: number;
  progressColor: string;
  status: string;
  statusTone: 'green' | 'gold' | 'red';
};
const units: Unit[] = [
  { name: 'Mooca', franchisee: 'Carlos Lima', washes: '1.920', revenue: 'R$ 54.912', goal: 'R$ 50.000', progress: 110, progressColor: '#22c55e', status: 'Acima da meta', statusTone: 'green' },
  { name: 'Tatuapé', franchisee: 'Ana Souza', washes: '1.540', revenue: 'R$ 44.044', goal: 'R$ 50.000', progress: 88, progressColor: 'var(--gold)', status: 'No prazo', statusTone: 'gold' },
  { name: 'Santo André', franchisee: 'Pedro Costa', washes: '1.280', revenue: 'R$ 36.608', goal: 'R$ 45.000', progress: 81, progressColor: 'var(--gold)', status: 'No prazo', statusTone: 'gold' },
  { name: 'Osasco', franchisee: 'Lúcia Mendes', washes: '980', revenue: 'R$ 28.028', goal: 'R$ 40.000', progress: 70, progressColor: 'var(--red)', status: 'Abaixo', statusTone: 'red' },
  { name: 'Guarulhos', franchisee: 'Rafael Torres', washes: '2.120', revenue: 'R$ 60.620', goal: 'R$ 55.000', progress: 110, progressColor: '#22c55e', status: 'Acima da meta', statusTone: 'green' },
];

type Alert = {
  level: 'critical' | 'warning';
  icon: string;
  title: string;
  desc: string;
  tag: string;
  tagTone: 'red' | 'gold';
  time: string;
};
const alerts: Alert[] = [
  { level: 'critical', icon: 'hugeicons:alert-02', title: 'QR code usado 2x seguidas · Mooca', desc: 'O QR #M-4821 foi acionado duas vezes em menos de 4 minutos pelo mesmo usuário.', tag: 'Crítico', tagTone: 'red', time: 'Hoje, 14:32' },
  { level: 'warning', icon: 'hugeicons:alert-02', title: 'Pico acima de 40% na Tatuapé — Sex 18h', desc: 'Fila de 7 usuários aguardando baias. Capacidade máxima atingida.', tag: 'Aviso', tagTone: 'gold', time: 'Hoje, 18:05' },
  { level: 'warning', icon: 'hugeicons:chart-decrease', title: 'Inadimplência de royalties · Guarulhos', desc: 'Franqueado Rafael Torres está em atraso há 12 dias. Valor: R$3.240.', tag: 'Aviso', tagTone: 'gold', time: 'Ontem, 09:15' },
];

export function Dashboard() {
  return (
    <>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.h1}>Dashboard</h1>
          <p className={styles.sub}>Visão geral da rede · Junho 2025</p>
        </div>
        <div className={styles.headerActions}>
          <select className={styles.select} defaultValue="30">
            <option value="30">Últimos 30 dias</option>
            <option value="7">Últimos 7 dias</option>
            <option value="month">Este mês</option>
          </select>
          <Button variant="primary">
            <Icon icon="hugeicons:download-01" /> Exportar
          </Button>
        </div>
      </div>

      <div className={styles.kpiGrid}>
        {kpis.map((k) => (
          <KpiCard key={k.label} {...k} />
        ))}
      </div>

      <div className={styles.chartsRow}>
        <Card title="Receita dos últimos 7 dias" aside={<span className={styles.cardMeta}>Todas as unidades</span>}>
          <div className={styles.barChart}>
            {bars.map((b) => (
              <div key={b.day} className={styles.barCol}>
                <span className={styles.barVal}>{b.value}</span>
                <div
                  className={styles.bar}
                  style={{
                    height: `${b.pct}%`,
                    background: b.color,
                    opacity: b.empty ? 1 : b.peak ? 1 : 0.85,
                    border: b.empty ? '1px solid rgba(255,255,255,.1)' : undefined,
                  }}
                />
                <span className={styles.barLabel} style={b.peak ? { color: 'var(--gold)', fontWeight: 700 } : undefined}>
                  {b.day}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Distribuição por plano" bodyStyle={{ paddingTop: 12 }}>
          {planDist.map((p) => (
            <div key={p.name}>
              <div className={styles.statRow}>
                <span className={styles.planName}>{p.name}</span>
                <span className={styles.planCount}>{p.count}</span>
              </div>
              <div className={styles.progressWrap}>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{ width: `${p.pct}%`, background: p.color }} />
                </div>
              </div>
            </div>
          ))}
          <div className={`${styles.statRow} ${styles.statTotal}`}>
            <span className={styles.totalLabel}>Total de assinantes</span>
            <span className={styles.totalVal}>4.320</span>
          </div>
        </Card>
      </div>

      <div className={styles.sectionLabel}>Desempenho por unidade</div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Unidade</th>
              <th>Lavagens / mês</th>
              <th>Receita</th>
              <th>Meta</th>
              <th>Progresso</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {units.map((u) => (
              <tr key={u.name}>
                <td>
                  <div className={styles.unitName}>{u.name}</div>
                  <div className={styles.unitMeta}>Franqueado: {u.franchisee}</div>
                </td>
                <td>{u.washes}</td>
                <td>{u.revenue}</td>
                <td>{u.goal}</td>
                <td style={{ minWidth: 120 }}>
                  <div className={styles.progressPct} style={{ color: u.progressColor }}>
                    {u.progress}%
                  </div>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${Math.min(u.progress, 100)}%`, background: u.progressColor }}
                    />
                  </div>
                </td>
                <td>
                  <Tag tone={u.statusTone}>{u.status}</Tag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.sectionLabel}>Alertas recentes</div>
      <div className={styles.alerts}>
        {alerts.map((a) => (
          <div key={a.title} className={`${styles.alert} ${styles[a.level]}`}>
            <div className={`${styles.alertIcon} ${styles[`icon-${a.level}`]}`}>
              <Icon icon={a.icon} />
            </div>
            <div className={styles.alertBody}>
              <div className={styles.alertTop}>
                <div>
                  <div className={styles.alertTitle}>{a.title}</div>
                  <div className={styles.alertDesc}>{a.desc}</div>
                </div>
                <Tag tone={a.tagTone}>{a.tag}</Tag>
              </div>
              <div className={styles.alertFoot}>
                <span className={styles.alertTime}>{a.time}</span>
                <Button as="a" href="#" variant="secondary" className={styles.alertBtn}>
                  Ver detalhes
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
