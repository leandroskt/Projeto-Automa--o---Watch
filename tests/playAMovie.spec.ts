// @ts-check

import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page'
import { SelecionarPerfilPage } from '../pages/selecionarPerfil-page'
import { PaginaInicalPage } from '../pages/paginaInicial-page'
import { ResultadoBuscaPage } from '../pages/resultadoBusca-page'
import { DetalhesDaMidia } from '../pages/detalhesDaMidia-page'

let urlInicial: string;
let emailLogin: string;
let senhaLogin: string;

// Verificação se variaveis de ambiente foram configuradas
if (process.env.URL_INICIAL && process.env.EMAIL && process.env.SENHA) {
  urlInicial = process.env.URL_INICIAL
  emailLogin = process.env.EMAIL;
  senhaLogin = process.env.SENHA;
} else {
  throw new Error("Necessário configurar o arquivo .env antes de executar.")
}

// Inicialização das variaveis de classes de páginas
let loginPage: LoginPage;
let selecionarPerfilPage: SelecionarPerfilPage;
let paginaInicialPage: PaginaInicalPage;
let resultadoBuscaPage: ResultadoBuscaPage;
let detalhesDaMidia: DetalhesDaMidia;

// Inicialização dos objetos das classes 
test.beforeEach(async ({ page }, testInfo) => {
  loginPage = new LoginPage(page,testInfo);
  selecionarPerfilPage = new SelecionarPerfilPage(page);
  paginaInicialPage = new PaginaInicalPage(page);
  resultadoBuscaPage = new ResultadoBuscaPage(page);
  detalhesDaMidia = new DetalhesDaMidia(page);
})

test('executar uma midia e fazer logout', async ({ page }) => {
  
  const termoPesquisa = 'megamente'
  await loginPage.acessar(urlInicial);

  await loginPage.printScr('Tela Login');

  await loginPage.logar(emailLogin, senhaLogin);
  
  await loginPage.printScr('Tela Perfil');

  await selecionarPerfilPage.selecionarPrimeiroPerfil();

  await page.waitForURL('**/home', { waitUntil: 'load' });  

  await loginPage.printScr('Tela Inicial');

  await paginaInicialPage.buscarConteudo(termoPesquisa);

  await resultadoBuscaPage.comResultados();

  await loginPage.printScr('Resultado da Busca');

  await resultadoBuscaPage.clicarNoPrimeiro();

  await loginPage.printScr('Tela do conteudo');
  
  await detalhesDaMidia.executarMidia();

  await loginPage.printScr('Reproduzindo a midia');

  await paginaInicialPage.fazerLogout();

  await loginPage.printScr('Feito o LogOut');


});

test('busca sem resultado', async ({ page }) => {
  const termoPesquisa = 'asdsadjhk'
  await loginPage.acessar(urlInicial);

  await loginPage.logar(emailLogin, senhaLogin);
  
  await loginPage.printScr('Tela Login');

  await selecionarPerfilPage.selecionarPrimeiroPerfil();

  await page.waitForURL('**/home', { waitUntil: 'load' });

  await loginPage.printScr('Pagina inicial');
  
  await paginaInicialPage.buscarConteudo(termoPesquisa);
    
  await resultadoBuscaPage.semResultado();

  await loginPage.printScr('Tela de resultado');
});
