import { element, by, ExpectedConditions, browser, ElementArrayFinder,ElementFinder} from 
"protractor";

export class Action
{

//dropdown click only*/
    dropdown (locator,logname)
{

    let ele = element(by.xpath(locator));
    browser.wait(ExpectedConditions.elementToBeClickable(ele),5000).then(function()
{
        ele.click().then(function(){
            console.log("clicked" +logname);
     }, function(err)
     {
            console.log("issue whele clicking"+logname)
    }) 
}   
    )}
//** My click - clicking with some validation

myClick(locator,logname)
{
let ele: any = element(by.xpath(locator));
browser.wait(ExpectedConditions.presenceOf(ele),5000).then(function()
{
    ele.click().then(function()
    {
        console.log("clicked" +logname);
    },function(err)
    {    
        console.log("issue while clicking"+logname);

    } )   
})
}

//**Dropdown select by value */
selectByValue(optionElements: string, name: string, logName: string) 
{
                
    let dropDownXpath: ElementArrayFinder = element.all(by.xpath(optionElements));
    let size: any = dropDownXpath.count();               
    for (let index = 1; index <= size; index++) {
            let optionElement:ElementFinder = element(by.xpath(optionElements + "[" + index + "]"));
            let text: any = optionElement.getAttribute("value");
            if (text.trim() === name.trim()) 
            {
                    optionElement.click();
                    console.log("able to select"+logName);
            }        
            else
            {
                console.log("Unable to select"+logName);
            }
    }
}










}
