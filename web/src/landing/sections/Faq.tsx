import { useState } from 'react';
import { Section } from '../../components/ui/Layout';
import styles from './Faq.module.css';

const faqs = [
  {
    q: 'Preciso sair do carro durante a lavagem?',
    a: 'Não. O Uashi é um lava-jato em esteira self service — você permanece dentro do veículo durante todo o processo. Basta colocar o câmbio no ponto morto e deixar a esteira fazer o trabalho.',
  },
  {
    q: 'Como funciona o QR code?',
    a: 'Você gera o QR code no app antes de entrar na fila. O leitor na entrada da esteira valida o código e libera a passagem automaticamente. O QR tem validade de 30 minutos a partir da geração.',
  },
  {
    q: 'O plano mensal inclui quantas lavagens?',
    a: 'Depende do plano. O Básico inclui 8 lavagens/mês. O Pro (ideal para motoristas de app) permite 1 lavagem completa por dia — são até 30 lavagens/mês. O plano Frota tem limite configurável por veículo e motorista.',
  },
  {
    q: 'Posso usar em qualquer unidade?',
    a: 'Sim! Todos os planos são válidos em qualquer unidade Uashi — em São Paulo e Grande ABC. Basta abrir o app e gerar o QR code normalmente.',
  },
  {
    q: 'Como funciona o programa de dependentes?',
    a: 'Você pode convidar dependentes (familiar, empregado) para usar seu plano. É possível definir limite de frequência (ex: máx 3x/semana) e limite de valor mensal. Você recebe uma notificação a cada uso e pode bloquear temporariamente.',
  },
  {
    q: 'Quais formas de pagamento são aceitas?',
    a: 'Cartão de crédito, débito e Pix — tudo pelo app. Para frotas, emitimos fatura mensal consolidada com nota fiscal.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" band glow="red">
      <div className={styles.wrap}>
        <div className={styles.head}>
          <h2 className={styles.title}>PERGUNTAS FREQUENTES</h2>
        </div>

        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className={styles.item}>
              <button
                className={styles.btn}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{f.q}</span>
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>+</span>
              </button>
              <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}>
                <p>{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
