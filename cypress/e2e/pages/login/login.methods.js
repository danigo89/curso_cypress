import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUserName(username){
        LoginElements.textboxes.username.type(username); // type() usado para insertar
    }

    static insertPassword(password){
        LoginElements.textboxes.password.type(password);
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click();
    }

    static login(username, password){
        this.insertUserName(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}