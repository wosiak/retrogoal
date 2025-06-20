# RetroGoal 
### **Autor:** Eduardo Wosiak
RetroGoal é um projeto de loja virtual focado na venda de camisas retrô de futebol. A proposta é proporcionar aos fãs do esporte uma experiência nostálgica, reunindo modelos clássicos de clubes e seleções que marcaram época.
O objetivo principal é desenvolver uma aplicação responsiva e visualmente atrativa, utilizando prototipação no Figma e implementação com HTML, CSS e o framework Bootstrap. O projeto foi inspirado no site retrogol.com.br, adaptando e personalizando o layout para criar uma identidade única para a marca RetroGoal.

## Design das Telas - Figma: 
Projeto | Desktop: https://www.figma.com/proto/GAc1iOPXwSIAPN0VxDPwrl/Projeto-%7C-RetroGoal?node-id=0-1&t=K9lA7soLL09EDXOi-1
Projeto | Mobile: https://www.figma.com/proto/GAc1iOPXwSIAPN0VxDPwrl/Projeto-%7C-RetroGoal?node-id=53-994&t=K9lA7soLL09EDXOi-1

## Design System: 
https://www.figma.com/proto/GAc1iOPXwSIAPN0VxDPwrl/Projeto-%7C-RetroGoal?node-id=7-3019&t=K9lA7soLL09EDXOi-1

## Site em Produção - GitHub Pages
https://github.com/wosiak/retrogoal/

## Framework CSS
**Bootstrap**

## Dependências JavaScript
- **JQuery** - Para realizar animações.
- **JSON Server** - Para simular uma API Rest.

## 📖 Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

A aplicação deve conter as funcionalidades listadas abaixo, estruturadas conforme os Resultados de Aprendizagem da Matriz por Competências.

---

#### RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos

- [x] ID 00 - Prototipa interfaces adaptáveis para no mínimo os tamanhos de tela mobile e desktop, usando ferramentas de design como Figma, Quant UX ou Sketch.
- [x] ID 01 - Implementa um layout responsivo utilizando um Framework CSS (Bootstrap, Materialize, Tailwind com DaisyUI), com Flexbox ou Grid.
- [ ] ID 02 - Utiliza técnica de responsividade nativa de CSS como Flexbox ou Grid Layout.
- [x] ID 03 - Utiliza componentes CSS (ex. card, button) e JavaScript (ex. modal, carrossel) oferecidos por um Framework CSS.
- [x] ID 04 - Implementa layout fluido com unidades relativas (vw, vh, %, em, rem) ao invés de unidades fixas (px).
- [ ] ID 05 - Implementa animações (fadeIn, fadeOut, slideIn, slideOut) com CSS Animations, Animate.css ou jQuery.
- ~~[ ] ID 06 - Cria transições personalizadas com CSS Transitions ou CSS Animation.~~ // Não é necessário!
- [x] ID 07 - Aplica um Design System consistente com diretrizes de estilo, cores, tipografia e padrões de componentes.
- [ ] ID 08 - Implementa pré-processadores CSS (ex: Sass), com variáveis, mixins e funções.
- [ ] ID 09 - Aplica tipografia responsiva com media queries ou `clamp()`, usando unidades como rem, em ou vw.
- [x] ID 10 - Aplica responsividade em imagens com `object-fit` e containers com vh, %, rem.
- [x] ID 11 - Otimiza imagens com WebP, `srcset`, `<picture>` ou URLs com Cloudinary (`w_`, `h_`, `f_auto`, `q_auto`).

---

#### RA2 - Tratamento de formulários e validações no lado cliente com HTML API e REGEX

- [x] ID 12 - Implementa validação no lado cliente com mensagens de erro ou sucesso, usando a API do HTML.
- [x] ID 13 - Aplica REGEX para validações customizadas de campos (e-mail, telefone, data, etc).
- [x] ID 14 - Incorpora elementos como checkbox, radio ou select em formulários web.
- [x] ID 15 - Lê e escreve dados no Web Storage para persistência local entre sessões.

---

#### RA3 - Ferramentas de otimização com Node.js, NPM, linters e boas práticas de versionamento

- [x] ID 16 - Configura ambiente com Node.js e NPM para gerenciamento de pacotes.
- ~~[ ] ID 17 - Utiliza linters (ESLint, Stylelint) para garantir qualidade e consistência no código.~~ // Não é necessário!
- [x] ID 18 - Adota boas práticas de versionamento com Git e GitHub.
- [x] ID 19 - Preenche o README.md conforme template da disciplina com o checklist incluso.
- ~~[ ] ID 20 - Minifica CSS, JS e otimiza imagens para melhor desempenho.~~ // Não é necessário!
- [x] ID 21 - Organiza os arquivos do projeto de maneira lógica e modular.
- ~~[ ] ID 22 - Utiliza metodologias BEM ou SMACSS na estruturação dos estilos CSS.~~ // Não é necessário!

---

#### RA4 - Aplicar bibliotecas JavaScript para interatividade

- [ ] ID 23 - Usa jQuery para manipular DOM, eventos e interatividade.
- [ ] ID 24 - Integra plugin jQuery (ex: jQuery Mask Plugin) para funcionalidade específica.
- ~~[ ] ID 25 - Utiliza Web Components (ex: Lit) para criar componentes reutilizáveis.~~ // Não é necessário!
- ~~[ ] ID 26 - Usa biblioteca de componentes prontos (Material Web Components, etc) ou componentes standalone.~~ // Não é necessário!

---

#### RA5 - Requisições assíncronas para APIs fake e públicas

- [x] ID 27 - Realiza requisição assíncrona para API fake para persistência de dados via formulário.
- [x] ID 28 - Realiza requisição assíncrona para API fake para exibição de dados na interface.

## Manual de execução
- Clonar o repositório com `https://github.com/wosiak/retrogoal.git`
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto 
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- (Opcional) Instalar o JSON Server globalmente disponível em `https://www.npmjs.com/package/json-server`
  - Comando: `npm i -g json-server` 
  - É opcional porque a dependência já vem cadastrada no arquivo `package.json` para instalação local na pasta `node_modules`
- Executar a API Fake (JSON Server) via o seguinte comando:
  - npm run json:server
  - Ou, se preferir rodar o comando completo: npx json-server --watch db.json --port 3000
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json`.
  - Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`    
- Executar o projeto frontend.

## Telas da aplicação
