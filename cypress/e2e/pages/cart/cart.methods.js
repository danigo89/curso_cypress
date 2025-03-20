import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible');
    }

    static verifyCartPageIsShow(){
        cy.url().should('include', 'cart.html');
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click();
    }
    static deleteProducts(){
        cy.get('a[onclick*="deleteItem"]').each(link =>{
            link.click();
            cy.wait(1000);
        })
    }

    static emptyCart(username, password){
        Logger.subStep('Navigate to Demoblaze application');
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Log out');
        CommonPageMethods.logout();
        Logger.subStep('Click HOME option');
        CommonPageMethods.clickOnHomeOption();
        Logger.subStep('Log in');
        CommonPageMethods.clickOnLoginOption();
        LoginMethods.login(username, password);
        Logger.subStep('Cart option');
        CommonPageMethods.clickOnCartOption();
        this.deleteProducts();

    }
}