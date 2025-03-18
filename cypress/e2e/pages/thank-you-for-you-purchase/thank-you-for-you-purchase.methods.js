import { ThankYouForYouPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class ThankYouForYouPurchaseMethods{
    static clickOnOkButton(){
        ThankYouForYouPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplayed(){
        ThankYouForYouPurchaseElements.icons.greenCheckMark.should('exist');
    }

}