# Referências de Animação & Componentes

Repertório de bibliotecas de componentes animados para inspiração de motion/UI no
Uashi. Fonte: [sanjay10985/animated-react-collection](https://github.com/sanjay10985/animated-react-collection).

> **Nota de contexto:** estas bibliotecas são em React/TypeScript + Tailwind +
> Motion (Framer Motion). O protótipo Uashi é **HTML/CSS vanilla**, então o uso
> aqui é como *referência de padrão* — a ideia/curva/timing se traduz para CSS
> (`transition`, `@keyframes`, `clip-path`, `transform`). Combinar sempre com os
> padrões de craft já instalados em `.agents/skills/` (Emil Kowalski:
> `ease-out` forte, <300ms, press feedback, `prefers-reduced-motion`).

## Bibliotecas principais

| Biblioteca | Link | Para quê serve |
|---|---|---|
| **ReactBits** | https://github.com/DavidHDev/react-bits | Componentes animados focados em performance e simplicidade |
| **Kokonut UI** | https://kokonutui.com/ | 100+ componentes customizáveis (Tailwind 4.0) |
| **Park UI** | https://park-ui.com/ | Lib moderna, colaboração e notificações |

## Foco em animação

| Biblioteca | Link | Padrões úteis p/ Uashi |
|---|---|---|
| **Animata** | https://animata.design/ | Border trail, mirror text, typing text |
| **Magic UI** | https://magicui.design/ | 150+ componentes animados (Motion) — shimmer, marquee, reveals |

## Coleção completa (por categoria)

**Featured:** [HyperUI](https://www.hyperui.dev/) · [Plate](https://platejs.org/) · [Neobrutalism](https://www.neobrutalism.dev/)

**Design systems:** [Kibo](https://www.kibo-ui.com/overview) · [Bundle UI](https://bundui.io/) · [Stack Zero UI](https://ui.stackzero.co/)

**Temáticas:** [Retro UI](https://retroui.dev/) · [Cult UI](https://www.cult-ui.com/) · [Origin UI](https://originui.com/)

**Dev tools:** [UI Beats](https://www.uibeats.com/) · [Variant Vault](https://variantvault.chrisabdo.dev/) · [Custom Icons](https://icons.pqoqubbw.dev/)

**Indie:** [Indie UI](https://ui.indie-starter.dev/) · [Jolly UI](https://www.jollyui.dev/) · [UI-X](https://ui-x.junwen-k.dev/)

**Outros:** [Buou UI](https://buouui.com/) · [Heart Switch](https://heart-switch.netlify.app/) · [Lukacho UI](https://ui.lukacho.com/) · [Percept UI](https://perceptui.codebrise.tech/) · [Skiper UI](https://skiper-ui.com/)

## Padrões já candidatos para o Uashi

Ideias dessas libs que casam com a identidade do projeto (esteira / movimento / azul):

- **Border trail / shimmer** (Animata, Magic UI) → contornos animados em cards de
  plano em destaque ("Pro") ou no botão "GERAR QR CODE".
- **Marquee** (Magic UI) → faixa de logos de plataformas (Uber/99/iFood) ou de
  unidades, rolando lentamente.
- **Typing / text reveal** (Animata) → headline do hero surgindo.
- **Animated icons** ([pqoqubbw/icons](https://icons.pqoqubbw.dev/)) → micro-animação
  nos ícones hugeicons no hover (atalhos, tab bar).
- **Number ticker** (Magic UI) → KPIs do admin e saldo de créditos contando ao entrar.

Ao implementar qualquer um: preferir CSS (`transform`/`opacity`), respeitar
`prefers-reduced-motion`, e passar pelo crivo da skill `review-animations`.
