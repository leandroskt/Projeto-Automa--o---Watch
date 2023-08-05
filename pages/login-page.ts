import { Page, TestInfo, expect } from '@playwright/test'

export class LoginPage {
    readonly page: Page;
    readonly testInfo: TestInfo;

    constructor(page: Page, testInf: TestInfo) {
        this.page = page;
        this.testInfo = testInf;
    }

    // Crédito: 
    // Código extraido de https://stackoverflow.com/a/76142169
    // Feito e adaptado por Serhiy Tymoshenko
    // Tratativa para que todos os elementos serem carregados na tela antes de tirar o printscreen de evidência
    async debounceDomLog(pollDelay = 50, stableDelay = 350) {
        let markupPrevious = '';
        const timerStart = new Date();
        let isStable = false;
        let counter = 0;
        
        while (!isStable) {
            ++counter;
            const markupCurrent = await this.page.content();
            const elapsed = new Date().getTime() - timerStart.getTime();

            if (markupCurrent == markupPrevious) {
                isStable = stableDelay <= elapsed;
            } else {
                markupPrevious = markupCurrent;
            }
            if (!isStable) {
                await new Promise(resolve => setTimeout(resolve, pollDelay));
            }
            // Adicionado um número máximo de tentativas
            if (counter > 10)
            {
                isStable = true;
            }
        }
    }

    async printScr(nome: string) {
        await this.debounceDomLog(1500, 2000);
        await this.testInfo.attach(nome, { body: await this.page.screenshot(), contentType: 'image/png' });
    }
    
    async acessar(urlTarget: string) {
        await this.page.goto(urlTarget);
    }

    async logar(email: string, senha: string) {
       await this.page.getByRole('textbox', { name: 'email' }).click();
       await this.page.getByRole('textbox', { name: 'Digite seu email' }).fill(email);
       await this.page.getByRole('textbox', { name: 'Digite sua senha' }).click();
       await this.page.getByRole('textbox', { name: 'Digite sua senha' }).fill(senha);
       if (await this.page.getByRole('button', { name: 'Entrar' }).isEnabled()) {
            await this.page.getByRole('button', { name: 'Entrar' }).click();
       }
    }
      
    async alerta(mensagem: string){
        //Seletor para localizar o elemento que exibe mensagens de erro
        const element = this.page.locator('div.error.ng-star-inserted > p');
        const text = await element.innerText();
        expect (text).toBe (mensagem);
    }
}