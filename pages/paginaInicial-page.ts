import { Page, expect } from '@playwright/test'

export class PaginaInicalPage {
    
    readonly page: Page;
    readonly url = "https://play.watch.tv.br/home";
    
    constructor(page: Page) {
        this.page = page
    }
    async irPara(){
        await this.page.goto(this.url)
    }

    async buscarConteudo(texto: string) {
        await this.page.getByRole('img', { name: 'search logo' }).click();
        await this.page.getByPlaceholder('O que você está procurando?').click();
        await this.page.getByPlaceholder('O que você está procurando?').fill(texto);
        await this.page.getByPlaceholder('O que você está procurando?').press('Enter');
    }

    async fazerLogout() {
        this.irPara();
        await this.page.locator('app-dropdown-header a').first().click();
        await this.page.getByText('Sair').click();
        expect (await this.page.getByRole('heading', { name: 'Entrar' })).toBeVisible;
      }
}
