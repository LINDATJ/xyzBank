import { element,by,browser, ExpectedConditions} from "protractor";
import {AddCustomer} from '../pages/BankManagerTest/bankmanager';
import {async} from "q";
let ltj = require('../Data/testData');
//Objet creation forBankManager-AddCustomer Class**/
var customerdetails = new AddCustomer();