# Otimização Tela a Tela — Progresso

> **Para retomar em outra sessão:** leia este arquivo. Ele é a fonte de verdade do
> que já foi otimizado e o que falta. Marque `[x]` ao concluir cada tela e
> commite. Tudo está na branch `main`.

## Design system / decisões já consolidadas (aplicar em toda tela)

- **Paleta oficial:** `--red #F21D1D` · `--gold #F2A007` · `--blue #0678BF` · `--cream #F2F1E9` · `--black #0D0D0D` · fundos `--bg #011c50` / `--surface #013272` / `--surface-2 #01408a`.
- **Fundo animado:** gradiente azul `uashiFlow` 22s `linear` (respeita `prefers-reduced-motion`).
- **`.destaque`:** eco em camadas (branco→amarelo→vermelho→azul) descendo à direita, em textos de destaque.
- **Swoosh:** divisor com o mesmo eco em camadas (não usar abaixo da logo — logo aparece sozinha).
- **Headers azuis** (`#0678BF`); **logo branca** (`uashi-logo.svg` mono).
- **Motion (skill Emil Kowalski):** `--ease-out: cubic-bezier(0.23,1,0.32,1)`, transições <300ms, press feedback `:active scale(.97)`, animar só `transform`/`opacity`.
- **Ícones:** hugeicons via `iconify-icon` (sem emojis).
- **Imagens:** pasta `img/` (foto real só `hero.webp`; resto são placeholders SVG — trocar por fotos conforme o usuário envia).

## Critérios de "otimização" por tela
**Foco escolhido:** Polish visual + motion · Consistência do design system
- [ ] Responsividade (mobile/tablet/desktop)
- [ ] Consistência com o design system acima
- [ ] Polish de motion (hover/press/entrada, padrões `review-animations`)
- [ ] Hierarquia visual / espaçamento
- [ ] Acessibilidade (contraste, foco, reduced-motion)
- [ ] Performance (imagens, repaints)

---

## LANDING (em andamento)

- [ ] `landing/index.html` — Home pública
- [ ] `landing/cadastro.html` — Criar conta
- [ ] `landing/franquia.html` — Seja franqueado
- [x] `landing/frota.html` — **NOVA**: landing para frotistas (criada ✓ — hero, vantagens, como funciona, planos, formulário B2B)

## APP (pendente)
- [ ] splash, login, index, comprar, checkout, creditos, qrcode, detalhe-lavagem,
  historico, fidelidade, planos, gerenciar-plano, dependentes, presente, veiculos,
  mapa, unidade, notificacoes, notificacoes-config, conta, perfil, suporte

## ADMIN (pendente)
- [ ] Matriz: index, login, franqueados, chamados, alertas, promocoes, planos, relatorios, perfil
- [ ] Franqueado: franqueado, franqueado-chamados, franqueado-historico, franqueado-usuarios
- [ ] Frota: frota, frota-veiculos, frota-motoristas, frota-chamados, frota-fatura
- [ ] Usuário: usuario, usuario-veiculos, usuario-dependentes, usuario-faturas, usuario-chamados

---

## Log de sessões
- 2026-06-25: criado tracker; foco = polish+consistência; criada landing/frota.html e linkada na nav. Próximo: otimizar landing/index.html (polish/motion/consistência).
