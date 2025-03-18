export class Logger{
    static stepNumber(number){
        const text = `Step # ${number}`;
        cy.log(text);
        cy.allure().step(text);
    }

    //Logueamos la descripción de un paso
    static step(description){
        const text = `Step - ${description}`;
        cy.log(text);    //logueamos en cypress
        cy.allure().step(text);  //loguemos en reporte de pruebas
    }
    
    //Logueamos la varificacion de un paso
    static verification(description){
        const text = `Verification - ${description}`;
        cy.log(text);    //logueamos en cypress
        cy.allure().step(text);  //loguemos en reporte de pruebas
    }
    
    //Logueamos la Sub-Step de un paso
    static subStep(description){
        const text = `Substep - ${description}`;
        cy.log(text);    //logueamos en cypress
        cy.allure().step(text);  //loguemos en reporte de pruebas
    }
    
    //Logueamos la Sub-Verificación de un paso
    static subVerificacion(description){
        const text = `SubVerificacion - ${description}`;
        cy.log(text);    //logueamos en cypress
        cy.allure().step(text);  //loguemos en reporte de pruebas
    }
}