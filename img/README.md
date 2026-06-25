# Imagens do projeto

Pasta para os assets de imagem do Uashi.

## Como funciona

> **Estado atual:** os slots usam placeholders **SVG locais** gerados (on-brand, sempre renderizam, sem rede). Os arquivos `.svg` desta pasta são esses placeholders. Para usar uma foto real, salve um `.jpg`/`.webp` aqui e troque a extensão no HTML correspondente.


Hoje as telas usam **fotos remotas** como placeholder, vindas de serviços
gratuitos que funcionam direto no navegador (sem chave de API):

- **loremflickr.com** — fotos temáticas por palavra-chave (carros, lava-jato)
- **i.pravatar.cc** — avatares de pessoas

Cada ponto de imagem tem um **nome de arquivo local sugerido** abaixo. Para
trocar por uma imagem definitiva, basta:

1. Colocar o arquivo nesta pasta com o nome indicado.
2. Trocar a URL remota pelo caminho local (ex.: `../img/hero.jpg`) no HTML.

> Dica: para fotos reais curadas, baixe do Unsplash/Pexels e salve aqui.
> Tamanhos sugeridos abaixo já consideram telas retina (2x).

## Slots de imagem

| Arquivo local sugerido | Onde aparece | Tamanho |
|---|---|---|
| `hero.jpg`            | Fundo do hero (landing/index.html) | 1600×900 |
| `loja-mooca.jpg`      | Card de unidade — Mooca (landing) | 160×160 |
| `loja-tatuape.jpg`    | Card de unidade — Tatuapé (landing) | 160×160 |
| `loja-santoandre.jpg` | Card de unidade — Santo André (landing) | 160×160 |
| `loja-guarulhos.jpg`  | Card de unidade — Guarulhos (landing) | 160×160 |
| `loja-osasco.jpg`     | Card de unidade — Osasco (landing) | 160×160 |
| `unidade-mooca.jpg`   | Foto da unidade (app/unidade.html) | 800×360 |
| `avatar-carlos.jpg`   | Avatar do perfil (app/perfil.html) | 160×160 |
| `avatar-dependente.jpg` | Avatar de dependente (app/dependentes.html) | 120×120 |
| `fidelidade.jpg`      | Banner de fidelidade (app/fidelidade.html) | 800×300 |
| `presente.jpg`        | Banner de presente (app/presente.html) | 800×300 |
