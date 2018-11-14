"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const bankmanager_1 = require("../pages/BankManagerTest/bankmanager");
const OpenAccount_1 = require("../pages/OpenAccounts/OpenAccount");
let ltj = require('../Data/testData');
//* Object creation for BankManager - Add Customer class**//
var customerdetails = new bankmanager_1.AddCustomer();
var openaccountdetails = new OpenAccount_1.OpenAccount(ltj.CustomerData1.firstname + "  " + ltj.CustomerData1.lastname, ltj.CustomerData1.currency);
//Create object for BankManager-AddCustomer class;
//import {DataProvider } from '../dataProvider/dataProvider';
//import { ConsoleReporter } from "jasmine"; 
//let using = require ('jasmine-data-provider');
//using(DataProvider.Common, async function (data)
describe('BankManager', function () {
    it('launch and enter value in BankManager', () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield protractor_1.browser.get(ltj.CustomerData1.url);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it('click on Bank Manager Login button', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.clickonAddcustomerButton();
    }));
    it('click on add customer button', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.clickonAddcustomerButton();
    }));
    it('enter first name value', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.enterFirstName(ltj.CustomerData1.firstname);
    }));
    it('enter last name value', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.enterLastName(ltj.CustomerData1.lastname);
    }));
    it('enter Pstal code value', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.enterpostcode(ltj.CustomerData1.Code);
    }));
    it('click on add customer submit button', () => __awaiter(this, void 0, void 0, function* () {
        it('Click on add customer button', () => __awaiter(this, void 0, void 0, function* () {
        }));
        //Click on Open Cudstomer button*//
        it('Click on Open Customer button', () => __awaiter(this, void 0, void 0, function* () {
            yield openaccountdetails.clickOpenAccountButton();
        }));
        //Click and select customer dropdown*//
        it('Click and select customer dropdown', () => __awaiter(this, void 0, void 0, function* () {
            yield openaccountdetails.selectCustomerName();
        }));
        it("select currency", () => {
            openaccountdetails.selectCurrency();
        });
        it("click on Process button to generate account no", () => {
            openaccountdetails.clickOnProcessButton();
            var alertValidate = protractor_1.browser.switchTo().alert();
            expect(alertValidate.accept).toBeDefined();
            alertValidate.getText().then((text) => {
                console.log(text);
                alertValidate.accept();
            });
        });
    }));
});
//# sourceMappingURL=HomeworkTC.js.map