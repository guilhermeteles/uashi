# Uashi Web (React)

Migração do protótipo estático (HTML/CSS) para React, componentizado. Cobre a
**landing** (marketing) e o **dashboard** (painel admin) na mesma SPA. O **app do
cliente** segue em Flutter — não faz parte deste projeto.

## Stack

- **Vite + React 18 + TypeScript**
- **React Router** — landing em `/`, dashboard em `/admin`
- **CSS Modules** por componente, reusando os design tokens do protótipo
  (`src/styles/tokens.css`) — cores, tipografia (Bebas Neue / Inter) e easing
- **@iconify/react** (set `hugeicons:*`, mesmo do protótipo)

## Rodando

```bash
cd web
npm install
npm run dev       # http://localhost:5173  (landing)  ·  /admin (dashboard)
npm run build     # typecheck (tsc) + build de produção
npm run preview   # serve o build
```

## Estrutura

```
src/
  styles/            tokens.css (design system) + global.css (reset/base)
  components/ui/      componentes compartilhados: Button, Tag, Card base,
                      Swoosh, Icon, StoreBadge, Layout (Container/Section)
  landing/
    LandingLayout    Navbar + Footer + <Outlet/>
    components/       Navbar, Footer, PhoneMockup, SectionHeading
    sections/         Hero, ComoFunciona, Precos, Planos, Lojas, BaixarApp, Faq
    pages/Home        compõe as seções
  admin/
    AdminLayout       Sidebar + Topbar + <Outlet/>
    components/        Sidebar, Topbar, KpiCard, Card
    pages/Dashboard    KPIs, gráfico, tabela de unidades, alertas
```

## Estado da migração

- [x] Fundação: projeto, design system, componentes base, roteamento
- [x] Landing — Home (`/`) — referência convertida
- [x] Dashboard — Matriz (`/admin`) — referência convertida
- [ ] Demais telas de landing: `cadastro`, `franquia`, `frota`
- [ ] Demais telas do dashboard (`admin/*`): franqueado, frota, usuário,
      chamados, alertas, planos, promoções, relatórios, perfil, login

As duas telas de referência estabelecem o padrão (dados em arrays no topo de
cada componente, estilos em CSS Modules) para replicar nas telas restantes.
