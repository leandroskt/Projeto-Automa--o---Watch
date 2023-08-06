# Projeto de Automacao - Watch-br
<h1 align="center">
  <p align="center">
    <img alt="Whatch" src="./assets/LOGO_WATCH.png" width="400px" />
  </p>

  <h3 align="center">
    Projeto para automação de testes na plataforma Watch Brasil.
  </h3>
  <p align="center">
     <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/leandroskt/Projeto-Automacao-Watch-br?color=1db954">
      <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leandroskt/Projeto-Automacao-Watch-br?color=1db954">
      <img alt="Stars" src="https://img.shields.io/github/stars/leandroskt/Projeto-Automacao-Watch-br?color=1db954">
      <img alt="Repository Size" src="https://img.shields.io/github/repo-size/leandroskt/Projeto-Automacao-Watch-br?color=1db954">
  </p>
</h1>

<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :page_with_curl: Sobre

Esse projeto tem por objetivo demonstrar os conhecimento em automação e em documentação, solicitados para oportunidade de Analista QA na Watch Brasil.

Diretrizes:
1. Com o acesso à plataforma fornecido, deve-se criar uma automatização de login, seleção de perfil e acessar um conteúdo da plataforma e assistir (pode ser qualquer tipo de conteúdo disponível na plataforma) e logout da plataforma;
1. Criar um teste negativo para essa variação, usando dados alterados ou manipulados de forma errada;
1. Documentar o roteiro de testes realizados, o roteiro pode ser criado em TDD ou BDD o que for melhor para o candidato;
1. Evidenciar os fluxos testados, exemplificando com imagens de sucesso e erro e do fluxo entre os testes se possível.
1. Postar seu desenvolvimento no Git (Gilab, Github) e compartilhar o link do projeto para validação da estrutura.

Documento de Plano/Roteiro de Testes podem ser encontrados <a href="./features/">AQUI.</a>

## :books: Requisitos

- Ter [**Node.js**](https://nodejs.org/en/) instalado.

## :rocket: Como executar

```bash
# Clonar o projeto
  git clone https://github.com/leandroskt/Projeto-Automacao-Watch-br/

# Ir para pasta do projeto
  cd .\Projeto-Automacao-Watch-br

# Configurar o arquivo .env com as informações corretas de acesso 
# (Editar o arquivo ".\Example.env.txt" com dados válidos de acesso e renomear-lo para ".env" 

#Intalar as dependencias:
  npm install -d

# Executar os testes
  npx playwright test --workers 4
```

## 💡 Informações / Notas

- O usuário utilizado nos testes deve ter acessado a plataforma pelo menos uma vez antes de ser utilizado nos testes pois não está mapeado a configuração de primeiro acesso.
- A performance dos testes está ligeiramente afetada por necessidade de capturas de telas a cada procedimento, o que se faz necessário esperar o carregamento completo das telas.
- O número máximo de Workers é 4 pois o usuário fornecido para testes está limitado a até 4 telas simultâneas.

## ☑️ Report-Example
<p align="center">
  <a  href="./playwright-report-example/index.html">report</a>
</p>
<p align="center">
  <img alt="Preview" src="./assets/preview.png" width="400px" />
</p>
