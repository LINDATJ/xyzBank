import {browser,by,element} from 'protractor';
import {Actions} from '../../Actions//Action';
//import Actions from 
//creating a page not a test case then later we will call this **/
export class OpenAccount extends Actions
 {
    clickOpenAccount: string;
    customerName: string;
    currency:string;
    processClick: string;
    
    constructor(name,value1) 
    {
        super();
        this.clickOpenAccount = "//button[@ng-click='openAccount()']"
        this.customerName = "//*[contains(text(),'"+name+"')]"
        this.currency = "//*[contains(text(),'"+value1+"')]"
        this.processClick = "//button[@type='submit']"
    }
     public clickOpenAccountButton() 
     {
         this.myClick(this.clickOpenAccount,"click on open account");
     }
    selectCustomerName() 
    {
        this.dropDown(this.customerName,"select customer name");
    }
    selectCurrency()
    {
        this.dropDown(this.currency,"select currency name");
    }  
    clickOnProcessButton() 
    {
        this.myClick(this.processClick, "click on process button");
        
    }

}
    

   
       
