import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

const existingUser = LoginData.validCredentials.username;
const existingPassword = LoginData.validCredentials.password;

describe(CommonPageData.testSuites.autentication, ()=>{
    it('Inicio de sesión válido',()=>{
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio.');
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Log in" en la barra de navegación.');
        CommonPageMethods.clickOnLoginOption();

        Logger.stepNumber(3);
        Logger.step('Ingresar un nombre de usuario y contraseña válidos.');
        LoginMethods.insertUserName(existingUser);
        LoginMethods.insertPassword(existingPassword);       

        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Log in" para iniciar sesión.');
        LoginMethods.clickOnLoginButton();

        cy.wait(2000)
        Logger.verification('Verificar que se redirige al usuario a la página de inicio.');
        CommonPageMethods.verifySignedUser(existingUser);

    })
})