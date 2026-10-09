# Links da IT.IA

A página do link da bio do Instagram da IT.IA: **links.it-ia.tec.br**.

Next.js e React, com a mesma identidade visual do site it-ia.tec.br (cores, fontes, ponto vermelho e marca-texto amarelo).

## Onde mexer

- **Links e textos de contato:** `data/contato.ts`.
- **Cartões e estrutura da página:** `app/page.tsx`.
- **Visual:** `app/globals.css`. As cores ficam no começo do arquivo, os mesmos tokens do site.

## Como a página cabe na tela

A página tem a altura da área que sobra na tela do celular, já descontando as barras do navegador, inclusive no navegador do Instagram. Por isso usa a unidade `svh`.

Cada tamanho vertical (logo, nome, texto, cartões, ícones e espaços) é uma fração dessa altura, com um mínimo e um máximo:

- o mínimo mantém o texto legível e o cartão fácil de tocar (nunca menos de 44px);
- o máximo evita exagero em telas grandes.

O espaço que sobra fica entre os blocos. Assim a página não rola em nenhum celular em pé. Celular deitado não comporta tudo na altura, e só nesse caso a página rola.

Ela foi conferida em 12 telas, de 320x480 a 1280x800, incluindo iPhone SE e iPhone 14 com a área do navegador do Instagram.

## Rodar e conferir

```
npm install
npm run dev
```

Antes de subir, rode `npm run lint` e `npm run build`.
