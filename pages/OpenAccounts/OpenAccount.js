"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../../Actions//Action");
//import Actions from 
//creating a page not a test case then later we will call this **/
class OpenAccount extends Action_1.Actions {
    constructor(name, value1) {
        super();
        this.clickOpenAccount = "//button[@ng-click='openAccount()']";
        this.customerName = "//*[contains(text(),'" + name + "')]";
        this.currency = "//*[contains(text(),'" + value1 + "')]";
        this.processClick = "//button[@type='submit']";
    }
    clickOpenAccountButton() {
        this.myClick(this.clickOpenAccount, "click on open account");
    }
    selectCustomerName() {
        this.dropDown(this.customerName, "select customer name");
    }
    selectCurrency() {
        this.dropDown(this.currency, "select currency name");
    }
    clickOnProcessButton() {
        this.myClick(this.processClick, "click on process button");
    }
}
exports.OpenAccount = OpenAccount;
//# sourceMappingURL=OpenAccount.js.map