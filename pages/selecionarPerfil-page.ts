import { Page, expect } from '@playwright/test'

export class SelecionarPerfilPage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page
    }
    async selecionarPrimeiroPerfil() {
            
        expect(await this.page.getByRole('heading', { name: 'Quem está assistindo?' })).toBeVisible;
        
        await this.page.locator('.profile-image > .ng-star-inserted').click();
    
    }
}
