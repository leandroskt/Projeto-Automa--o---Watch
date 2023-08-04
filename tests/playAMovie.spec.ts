// @ts-check

import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login-page'
import { SelecionarPerfilPage } from '../pages/selecionarPerfil-page'
import { PaginaInicalPage } from '../pages/paginaInicial-page'
import { ResultadoBuscaPage } from '../pages/resultadoBusca-page'
import { DetalhesDaMidia } from '../pages/detalhesDaMidia-page'

const urlInicial = process.env.URL_INICIAL
const emailLogin = process.env.EMAIL;
const senhaLogin = process.env.SENHA;

let loginPage: LoginPage;
let selecionarPerfilPage: SelecionarPerfilPage;
let paginaInicialPage: PaginaInicalPage;
let resultadoBuscaPage: ResultadoBuscaPage;
let detalhesDaMidia: DetalhesDaMidia;

test.beforeEach(async ({ page }, testInfo) => {
  loginPage = new LoginPage(page,testInfo);
})


test('executar uma midia', async ({ page }, testInfo) => {
  const termoPesquisa = 'megamente'
  await loginPage.acessar(urlInicial);

  await loginPage.printScr('Tela Login');

  await loginPage.logar(emailLogin, senhaLogin);
  
  await loginPage.printScr('Tela Perfil');

  selecionarPerfilPage = new SelecionarPerfilPage(page);

  await selecionarPerfilPage.selecionarPrimeiroPerfil();

  await page.waitForURL('**/home', { waitUntil: 'load' });
  
  paginaInicialPage = new PaginaInicalPage(page);

  await loginPage.printScr('Tela Inicial');

  await paginaInicialPage.buscarConteudo(termoPesquisa);
    
  resultadoBuscaPage = new ResultadoBuscaPage(page);

  await resultadoBuscaPage.comResultados();

  await loginPage.printScr('Resultado da Busca');

  await resultadoBuscaPage.clicarNoPrimeiro();

  await loginPage.printScr('Tela do conteudo');

  detalhesDaMidia = new DetalhesDaMidia(page);
  
  await detalhesDaMidia.executarMidia();

  await loginPage.printScr('Reproduzindo a midia');


});

test('busca sem resultado', async ({ page }, testInfo) => {
  const termoPesquisa = 'asdsadjhk'
  await loginPage.acessar(urlInicial);

  await loginPage.logar(emailLogin, senhaLogin);
  
  await loginPage.printScr('Tela Login');

  selecionarPerfilPage = new SelecionarPerfilPage(page);

  await selecionarPerfilPage.selecionarPrimeiroPerfil();

  await page.waitForURL('**/home', { waitUntil: 'load' });

  await loginPage.printScr('Pagina inicial');
  
  paginaInicialPage = new PaginaInicalPage(page);

  await paginaInicialPage.buscarConteudo(termoPesquisa);
    
  resultadoBuscaPage = new ResultadoBuscaPage(page);

  await resultadoBuscaPage.semResultado();

  await loginPage.printScr('Tela de resultado');
});
