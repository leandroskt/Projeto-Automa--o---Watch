import { Page } from '@playwright/test'

export class PaginaInicalPage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page
    }
    async buscarConteudo(texto: string) {
        await this.page.getByRole('img', { name: 'search logo' }).click();
        await this.page.getByPlaceholder('O que você está procurando?').click();
        await this.page.getByPlaceholder('O que você está procurando?').fill(texto);
        await this.page.getByPlaceholder('O que você está procurando?').press('Enter');
    }
}
