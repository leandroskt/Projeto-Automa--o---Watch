import { Page, expect } from '@playwright/test'

export class SelecionarPerfilPage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page
    }
    async selecionarPrimeiroPerfil() {
        await this.page.locator('.profile-image > .ng-star-inserted').click();
    }
}
