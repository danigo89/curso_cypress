import { HomeElements } from "./home.elements";

export class HomeMethod{
    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phones.click()
    }

    static clickOnLaptopsOption(){
        HomeElements.categoriesMenu.laptops.click()
    }

    static clickOnMonitorsOption(){
        HomeElements.categoriesMenu.monitors.click()
    }

    static clickOnProductLink(productName){
        HomeElements.product(productName).click();
    }
}