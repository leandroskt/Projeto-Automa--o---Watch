// @ts-check
require('dotenv').config();
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page'
import { SelecionarPerfilPage } from '../pages/selecionarPerfil-page'

let urlInicial: string;
let emailLogin: string;
let senhaLogin: string;

if (process.env.URL_INICIAL && process.env.EMAIL && process.env.SENHA) {
  urlInicial = process.env.URL_INICIAL
  emailLogin = process.env.EMAIL;
  senhaLogin = process.env.SENHA;
} else {
  throw new Error("Necessário configurar o arquivo .env antes de executar os testes.")
}

let loginPage: LoginPage;
let selecionarPerfilPage: SelecionarPerfilPage;

test.beforeEach(async ({ page }, testInfo) => {
  loginPage = new LoginPage(page, testInfo);
})

test('login com sucesso', async ({ page }) => {
  await loginPage.acessar(urlInicial);

  await loginPage.logar(emailLogin, senhaLogin);
  
  await loginPage.printScr('Tela Login');

  selecionarPerfilPage = new SelecionarPerfilPage(page);

  await selecionarPerfilPage.selecionarPrimeiroPerfil();


  await loginPage.printScr('Pagina inicial');
  

});

test('Senha Inválida', async () => {
  await loginPage.acessar(urlInicial);
  await loginPage.logar(emailLogin, 'abc123456');

  await loginPage.alerta('E-mail ou senha incorreta.');
  
  await loginPage.printScr('Mensagem');
});

test('Email Inválido', async () => {
  await loginPage.acessar(urlInicial);
  await loginPage.logar('comercial@whatchbr', senhaLogin);

  await loginPage.alerta('E-mail invalido.');
  
  await loginPage.printScr('Mensagem');
});


test('Email em branco', async ({ page }) => {
  await loginPage.acessar(urlInicial);
  await loginPage.logar('', senhaLogin);

  expect (page.getByRole('button', { name: 'Entrar' })).toBeDisabled;

  await loginPage.printScr('Mensagem');
});

test('Senha em branco', async ({ page }) => {
  await loginPage.acessar(urlInicial);
  await loginPage.logar(emailLogin, '');

  expect (page.getByRole('button', { name: 'Entrar' })).toBeDisabled;

  await loginPage.printScr('Mensagem');
});

test('Erro no script/seletor', async () => {
  await loginPage.acessar(urlInicial);
  await loginPage.logar(emailLogin, 'abc123456');

  await loginPage.alerta('alerta invalido');
  
  await loginPage.printScr('Mensagem');
});
