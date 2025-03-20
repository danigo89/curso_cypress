import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUserName(username){
        LoginElements.textboxes.username.invoke('val', username); // type() usado para insertar
    }

    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val', password);
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click();
        cy.wait(1500);
    }

    static login(username, password){
        Logger.subStep('Insert username');
        this.insertUserName(username)

        Logger.subStep('Insert password');
        this.insertPassword(password)

        Logger.subStep('Click on "Login" button');
        this.clickOnLoginButton()
    }

    static verifyWrongPasswordMessage(){
        CommonPageMethods.verifyAlert('Wrong password.');
        }
}