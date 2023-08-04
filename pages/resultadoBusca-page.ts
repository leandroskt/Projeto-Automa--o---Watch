import { Page, expect } from '@playwright/test'

export class ResultadoBuscaPage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page
    }
    async semResultado() {
            
        const element = this.page.locator(' div.section > p');
        const text = await element.innerText();
        expect (text).toContain ("Nenhum");
    }
    async comResultados() {
            
        const element = this.page.locator(' div.section > p');
        const text = await element.innerText();
        expect (text).not.toContain ("Nenhum");
    }

    async clicarNoPrimeiro(){
        await this.page.locator('app-card').filter({ hasText: 'Assistir' }).getByRole('button').first().click();
    }
}