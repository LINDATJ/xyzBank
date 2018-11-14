import {browser,by,element} from "protractor";
//import Actions from 
export class AddCustomer
{
    bankmanagerloginbtn: string;
    addcustomerbtn:string;
    firstName:string;
    lastName:string;
    postcode:string;
    generateCustomerID:string;

    constructor()
    {
        //super();
        this.bankmanagerloginbtn= "//button[contains(text(),'Bank Manager Login')]";
        this.addcustomerbtn= "//button[@ng-class ='btnClass1']";
        this.firstName = "//input[@ng-model ='fName']";
        this.lastName = "//input[@ng-model ='lName']";
        this.postcode = "//input[@ng-model ='postCd']";
        this.generateCustomerID = "//button[@type ='submit']";
    }
public clickonBankmanagerLoginButton()
{
    const btnlogin = element(by.xpath(this.bankmanagerloginbtn));
    if (btnlogin.isDisplayed())
    {
        btnlogin .click();
        
    } 
    else 
    {       
      console.log("element not displayed");
    }    
}
public clickonAddcustomerButton()
{
    const custbtn =  element(by.xpath(this.addcustomerbtn));
        if (custbtn.isDisplayed())
        {
         custbtn.click();   
        } 
        else
        {
         console.log("customer button is not displayed");  
        }
}
public enterFirstName(keys)    
{
    const firstname =  element(by.xpath(this.firstName));
        if (firstname.isDisplayed())
        {
         firstname.sendKeys(keys);   
        } 
        else
        {
         console.log("first name field is not displaying");   
        }
}    
public enterLastName(keys)
{
    const lastname = element(by.xpath(this.lastName));
    if (lastname.isDisplayed())
    {
    lastname.sendKeys(keys);  
    }  
    else    
    {
    console.log("last name field is not displaying");
    }
}
public enterpostcode(keys)
{
    const pstlcode = element(by.xpath(this.postcode));
    if (pstlcode.isDisplayed())
    {
            pstlcode.sendKeys(keys); 
    } 
    else 
    {
          console.log("postal code field is not displaying"); 
    }
}
public addCustomerButtonClick()
{
    const custbtn = element(by.xpath(this.generateCustomerID));
    if (custbtn.isDisplayed())
    {
          custbtn.click();
    }
         else
    {
            console.log("submit button is not displaying");        
    }
        const alertDialog = browser.switchTo().alert();
        alertDialog.accept();
        var text: any=alertDialog.getText();
        console.log(text);
}  
}           