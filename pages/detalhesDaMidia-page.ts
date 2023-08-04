import { Page, expect } from '@playwright/test'

export class DetalhesDaMidia {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page
    }
    async executarMidia() {
        expect  (this.page.locator('div >  app-play-button > button')).toBeVisible();
        await this.page.locator('div >  app-play-button > button').click();
    }
    
}