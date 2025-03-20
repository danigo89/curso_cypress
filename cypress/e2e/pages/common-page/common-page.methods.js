import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.clearCookies();
        cy.visit(CommonPageData.url);
    }

    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click();
    }
    static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    }

    static clickOnAboutUsOption(){
        CommonPageElements.topMenu.aboutUs.click();
    }

    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click();
        Cypress.on('uncaught:exception', (err, runnable) =>{
            return false;
        })
    }

    static clickOnLoginOption(){
        CommonPageElements.topMenu.login.click();
    }

    static clickOnSignupOption(){
        CommonPageElements.topMenu.signup.click();
    }

    static verifyAlert(expectedMessage){
        cy.on('window:alert', (str)=>{
            expect(str).to.equal(expectedMessage);
        });
    }

    static generateRandomString(length = 10) {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    static verifySignedUser(username){
        CommonPageElements.signedUser.should('have.text', `Welcome ${username}`);
    }

}