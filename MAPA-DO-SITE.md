# Mapa do Site — Uashi (Protótipo)

Protótipo HTML estático de um sistema de lava-jato self-service em esteira. São **50 páginas** divididas em 4 grupos. Não há framework: cada tela é um HTML independente com CSS compartilhado.

**Estilos compartilhados:** `_shared.css` (global), `app/_shell.css` (app mobile), `admin/_admin.css` (painel).

| Grupo | Pasta | Páginas | Público |
|---|---|---|---|
| Índice | `/` | 1 | Navegação do protótipo |
| Landing | `landing/` | 3 | Site público / marketing |
| App | `app/` | 23 | Aplicativo do cliente (mobile) |
| Admin | `admin/` | 23 | Painel (Matriz, Franqueado, Frota, Usuário) |

---

## 📍 Raiz

### `index.html` — Índice de Navegação
Hub de links do protótipo, agrupado em três seções: **Landing**, **App** e **Admin**. Lista todas as telas para acesso rápido.

---

## 🌐 Landing (site público)

### `landing/index.html` — Home (Lava-Jato Self Service em Esteira)
- **Nav** — logo, links (ocultos no mobile), CTA
- **Hero** — copy, badges iOS/Android, busca de loja, prova social, mockup de celular com tela de QR simulada
- **Como Funciona** — 5 passos: Chegou → Abriu o app → Gerou o QR → Passou pela esteira → Foi embora (com conector visual)
- **Lavagem Avulsa (preços por veículo)** — Hatch/Sedan, SUV/Pickup (destaque), Van/Minivan, Moto
- **Planos de Assinatura** — Básico, Pro/Motorista (destaque), Frota
- **Encontre uma Unidade** — lista de unidades + mapa
- **App** — mockup com 2 celulares + copy
- **Perguntas Frequentes (FAQ)**
- **Footer** — colunas App, Empresa, Contato
- CTAs: *Assinar Básico*, *Assinar Pro*, *Falar com Comercial*

### `landing/cadastro.html` — Criar Conta
- **Coluna lateral** — logo, copy central, mini mockup de celular
- **Formulário multi-etapa** com barra de progresso e indicador de steps:
  - **Step 1 — Seus Dados** (dados pessoais) + login social
  - **Step 2 — Como Você Usa?** (tipo de usuário)
  - **Step 3 — Qual Plataforma? / Sua Frota** (condicional, conteúdo injetado via JS conforme o tipo)
  - **Step 4 — Senha e Termos** (senha + aceite de termos)
- **Tela de Sucesso** — ícone animado, swoosh divisor, badges, próximos passos
- Navegação: *← Voltar* / *Continuar →* / *Criar conta ✓*

### `landing/franquia.html` — Seja um Franqueado
- **Nav** + **Hero** (com mini-KPIs)
- **Os Números Falam** — números do negócio + testimonial
- **Uashi vs Lava-Jato Tradicional** — comparativo (Tradicional × Uashi)
- **Diferenciais** — Implantação Guiada, Tecnologia Incluída, Marketing Central, Treinamento Completo, Painel de Gestão, Suporte 24/7
- **Investimento** — Investimento Inicial, Composição do Investimento (custos), Taxas Recorrentes, Projeção Conservadora
- **Como Funciona o Processo** — Do Interesse à Abertura: Apresentação e Qualificação → Visita à Unidade Piloto → Proposta e Contrato → Implantação e Abertura
- **Formulário de Interesse** + aceite + estado de sucesso ("Interesse Registrado!")
- **Footer**
- CTAs: *Quero ser franqueado*, *Ver investimento*

---

## 📱 App (aplicativo do cliente)

Estrutura mobile com **status bar**, **top bar** e **tab bar** (navegação inferior) recorrentes.

### `app/splash.html` — Bem-vindo (Onboarding)
3 slides de introdução. Botões: *Próximo →*, *← Voltar*, *Começar agora*.

### `app/login.html` — Entrar
Logo, login social, formulário de e-mail/senha. Botão *Entrar*.

### `app/index.html` — Home
- Status bar / Top bar
- **Hero card** — créditos + plano
- **QR code rápido**
- **Atalhos**
- **Fidelidade sneak peek**
- **Unidade próxima**
- **Última lavagem**
- Tab bar

### `app/comprar.html` — Comprar Lavagem
Saldo · Seleção de Veículo · Tipo de lavagem · Resumo. Botão *Confirmar e Gerar QR Code*.

### `app/checkout.html` — Checkout
Resumo do pedido · Métodos de pagamento · Form de cartão · Seção PIX.

### `app/creditos.html` — Créditos
Saldo atual · Valor customizado · Forma de pagamento · Resumo. Botão *Confirmar — R$ 50,00*.

### `app/qrcode.html` — QR Code
- Status bar / Top bar (tema claro para o scanner)
- **Timer bar** (validade)
- **QR Code visual** — estado "Lavagem Completa"
- **Enviar de presente**
- Tab bar

### `app/detalhe-lavagem.html` — Detalhe da Lavagem
Status hero · Infos · Pagamento · Avaliação. Botões: *← Voltar ao histórico*, *Lavar novamente*.

### `app/historico.html` — Histórico
Resumo do mês · Filtros · Lista por período (Junho 2025, Maio 2025).

### `app/fidelidade.html` — Fidelidade
Nível atual (hero) · Benefícios do nível · Jornada de níveis · Histórico de pontos.

### `app/planos.html` — Planos
Plano atual · Toggle mensal/anual · cards Básico, Pro (atual), Frota. CTAs: *Mudar para Básico*, *Plano atual*, *Falar com Comercial*.

### `app/gerenciar-plano.html` — Gerenciar Plano
Plano atual · Uso do mês · Método de pagamento · Histórico de faturas · Ações. Botão *Mudar de plano*.

### `app/dependentes.html` — Dependentes
Dependente ativo · Uso do mês · Limites · Convidar novo · Modal de convite. Botões: *Cancelar*, *Enviar convite*.

### `app/presente.html` — Enviar Presente
Hero · Tipos de presente · Para quem · Contatos recentes · Mensagem · Resumo · Saldo disponível · CTA · Overlay de sucesso (*Voltar ao início*).

### `app/veiculos.html` — Meus Veículos
Lista de veículos · botão Adicionar · Modal de adicionar. Botões: *Cancelar*, *Salvar*.

### `app/mapa.html` — Lojas (Mapa)
Mapa embed · Overlay/tag de unidade.

### `app/unidade.html` — Detalhe da Unidade (Uashi Mooca)
Mapa mini · Status + endereço · Horários de pico (gráfico de barras simulado) · Horário de funcionamento · CTAs (*Lavar aqui agora*, *Abrir no Google Maps*).

### `app/notificacoes.html` — Notificações
Lista agrupada: Hoje · Ontem · Esta semana.

### `app/notificacoes-config.html` — Config. Notificações
Push global · Tipos de notificação. Botão *Salvar configurações*.

### `app/conta.html` — Minha Conta
Profile card · Menu de opções.

### `app/perfil.html` — Perfil
Avatar · Formulário de dados · Alterar senha. Botão *Salvar alterações*.

### `app/suporte.html` — Suporte
Abrir chamado · Chamados em aberto · FAQ rápido · Contato direto (*WhatsApp*, *E-mail*).

---

## 🖥️ Admin (painel administrativo)

Layout comum: **Sidebar** + **Topbar** + **Page content**. Cobre 4 perfis: Matriz (global), Franqueado, Frota e Usuário.

### Matriz (administração global)

#### `admin/login.html` — Login Admin
Step 1: Login (com seletor de perfil) · Step 2: MFA.

#### `admin/index.html` — Dashboard Matriz
Page header · KPI grid · Charts row (bar chart + mini stats) · Tabela de unidades · Alertas recentes.
*Tabela:* Unidade · Lavagens/mês · Receita · Meta · Progresso · Status.

#### `admin/franqueados.html` — Gestão de Franqueados
Page header · Summary cards · Filtros · Tabela · Form novo franqueado (oculto).
*Tabela:* Franqueado · Unidade/Cidade · Lavagens/mês · Receita · Royalties (8%) · Status · Ações.

#### `admin/chamados.html` — Central de Chamados
Stats row · Filtros · Tabela.
*Tabela:* # · Usuário · Categoria/Descrição · Unidade · Abertura · Status · Ações.

#### `admin/alertas.html` — Alertas
Stats · Filter chips · Lista de alertas agrupada por severidade: Crítico (3), Aviso (4), Info (3).

#### `admin/promocoes.html` — Promoções Relâmpago
Page header · Stats · Form criar promoção · Tabela.
*Tabela:* Nome · Unidades · Tipo · Desconto · Período · Alcance · Status · Ações.

#### `admin/planos.html` — Planos & Preços
Planos de assinatura (Básico, Pro, Frota) · Tabela de preços por tipo de veículo · MRR total.
*Tabela de preços avulsos:* Veículo · Simples · Completa · Premium.

#### `admin/relatorios.html` — Relatórios
Filtros de período · Quick stats · Grid de relatórios disponíveis · Histórico de exportações.
*Tabela:* Relatório · Período · Formato · Gerado em · Ações.

#### `admin/perfil.html` — Perfil Admin
Coluna esquerda (avatar + info rápida) · Coluna direita (formulários): Dados pessoais, Segurança, Notificações.

### Franqueado

#### `admin/franqueado.html` — Dashboard Franqueado (Uashi Mooca)
Sidebar franqueado · KPIs · Benchmark anônimo · Horários de pico · Últimas lavagens.
*Tabela:* Hora · Usuário · Veículo · Tipo · Pagamento · Valor.

#### `admin/franqueado-chamados.html` — Chamados da Unidade
Lista de chamados · seção Resolvidos.

#### `admin/franqueado-historico.html` — Histórico de Lavagens
*Tabela:* Data/Hora · Usuário · Veículo · Tipo · Pagamento · Valor · Pontos.

#### `admin/franqueado-usuarios.html` — Usuários Ativos
*Tabela:* Usuário · Plano · Lavagens/mês · Último acesso · Pontos · Status · Ações.

### Frota

#### `admin/frota.html` — Dashboard Frota (Transportes Silva Ltda)
KPIs · Uso por veículo · Faturas recentes · Alertas de limite.
*Tabela:* Placa · Motorista · Lavagens · Limite.

#### `admin/frota-veiculos.html` — Veículos da Frota
Lista · Modal adicionar veículo.
*Tabela:* Placa · Modelo · Motorista · Lavagens/mês · Uso · Status · Ações.

#### `admin/frota-motoristas.html` — Motoristas Vinculados
Lista de motoristas vinculados à frota.

#### `admin/frota-chamados.html` — Suporte da Frota
Formulário novo chamado + lista.

#### `admin/frota-fatura.html` — Fatura (Junho 2025)
Fatura em aberto · Breakdown por veículo · Histórico.
*Tabela:* Placa · Modelo · Motorista · Lavagens · Tipo mais usado · Custo.

### Usuário (visão admin)

#### `admin/usuario.html` — Dashboard Usuário (Olá, Carlos!)
KPIs pessoais · Plano atual · Fidelidade · Últimas lavagens.
*Tabela:* Data · Tipo · Veículo · Unidade · Valor · Pontos.

#### `admin/usuario-veiculos.html` — Meus Veículos
Veículo principal · Veículo secundário · Slot disponível · Histórico comparativo · Modal adicionar veículo.

#### `admin/usuario-dependentes.html` — Dependentes
Dependente ativo · Slot disponível · Histórico de uso dos dependentes · Modal convidar dependente.
*Tabela:* Data · Tipo · Veículo · Unidade · Valor.

#### `admin/usuario-faturas.html` — Faturas & Pagamentos
Plano atual + próxima cobrança · Histórico de faturas.
*Tabela:* Período · Descrição · Valor · Status · NF.

#### `admin/usuario-chamados.html` — Meus Chamados
Formulário novo chamado (oculto) · Lista de chamados · Contatos rápidos.

---

## Resumo quantitativo

- **1** índice de navegação
- **3** páginas de landing (home, cadastro, franquia)
- **23** telas de app mobile
- **23** telas de painel admin (9 Matriz + 4 Franqueado + 5 Frota + 5 Usuário)

> Observação: os "componentes" listados correspondem às seções demarcadas por comentários HTML no código. Trata-se de um protótipo estático (sem componentização real de framework), com CSS compartilhado entre as telas.
