import { element,by,browser, ExpectedConditions} from "protractor";
import {AddCustomer} from '../pages/BankManagerTest/bankmanager';
import {OpenAccount} from '../pages/OpenAccounts/OpenAccount';
//import {OpenAccount} from '../pages/OpenAccount/openAccount';
import {async} from "q";
let ltj = require('../Data/testData');
//* Object creation for BankManager - Add Customer class**//
var customerdetails = new AddCustomer();
var openaccountdetails = new OpenAccount
(ltj.CustomerData1.firstname + "  "+ltj.CustomerData1.lastname,ltj.CustomerData1.currency);
//Create object for BankManager-AddCustomer class;
//import {DataProvider } from '../dataProvider/dataProvider';
//import { ConsoleReporter } from "jasmine"; 
//let using = require ('jasmine-data-provider');
//using(DataProvider.Common, async function (data)

describe ('BankManager Testing',function(){
        
    it('launch and enter value in BankManager', async()=>{
        try 
        {
            await browser.get(ltj.CustomerData1.url);    
        } catch (error) {
            console.log(error);
        }
             
    });

    it('click on Bank Manager Login button', async()=>{
        await customerdetails.clickonBankmanagerLoginButton();                  
    });
    it('click on add customer button', async()=>{  
        await customerdetails.clickonAddcustomerButton();        
    });
    it('enter first name value', async()=>{
        await customerdetails.enterFirstName(ltj.CustomerData1.firstname);       
    }); 
    it('enter last name value', async()=>{
        await customerdetails.enterLastName(ltj.CustomerData1.lastname);    
    });
    it('enter Pstal code value', async()=>{
        await customerdetails.enterpostcode(ltj.CustomerData1.Code);        
    });            
        //Click on Open Customer button*//
    it ('Click on Open Customer button', async()=>{
      await customerdetails.addCustomerButtonClick();        
    });
    it('click on add customer submit button', async()=>{
        await customerdetails. addCustomerButtonClick();        
    });
           //Click and select customer dropdown*//
    it ('Click and select customer dropdown', async()=>{
            await openaccountdetails.selectCustomerName();
    }); 
    it('select currency',() => {
            openaccountdetails.selectCurrency();                                        
    });
    it('click on Process button to generate account no', () => { 
            openaccountdetails.clickOnProcessButton();
            var alertValidate = browser.switchTo().alert();
            expect(alertValidate.accept).toBeDefined();
            alertValidate.getText().then((text)=>{ 
                console.log(text);
                alertValidate.accept();
            });           
        });
    });        
       