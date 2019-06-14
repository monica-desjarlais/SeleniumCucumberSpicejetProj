package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//rahulonlinetutor@gmail.com
public class ReturnDatePage {

	
	public WebDriver driver;
	
	By oneway=By.id("ctl00_mainContent_rbtnl_Trip_0");
	By returnDate=By.id("Div1");
	
	
	
	public ReturnDatePage(WebDriver driver) {
		// TODO Auto-generated constructor stub
		
		this.driver=driver;
		
	}


	
	//public WebElement getSearchBox()
	//{
		//return driver.findElement(searchBox);
	//}
	
	public WebElement getOneWayBtn()
	{
			return driver.findElement(oneway);
	}
	
	public WebElement getReturnDate()
	{
		return driver.findElement(returnDate);
	}
	
	
		
		
		
	
	
}
