package pageObjects;

import java.awt.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//rahulonlinetutor@gmail.com
public class BookingTicketPage {

	
	public WebDriver driver;
	
	By departure=By.id("ctl00_mainContent_ddl_originStation1_CTXT");
	By delhi=By.xpath("//a[@value='DEL']");
	By destination = By.id("ctl00_mainContent_ddl_destinationStation1_CTXT");
	By maa = By.xpath("//div[@id='glsctl00_mainContent_ddl_destinationStation1_CTNR'] //a[@value='MAA']");
	By datebtn = By.cssSelector("#flightSearchContainer > div.picker-first2 > button");
	By month = By.cssSelector("div.ui-datepicker-group.ui-datepicker-group-last > div > div > span.ui-datepicker-month");
	By monthbtn = By.cssSelector("div.ui-datepicker-group.ui-datepicker-group-last > div > a > span");
	By day = By.cssSelector("a.ui-state-default");
	By passangers= By.id("divpaxinfo");
	By adults=By.id("hrefIncAdt");
	By search = By.name("ctl00$mainContent$btn_FindFlights");
	
	
	public BookingTicketPage(WebDriver driver) {
		// TODO Auto-generated constructor stub
		
		this.driver=driver;
		
	}
	
	
	public WebElement getSearchBtn()
	{
			return (WebElement) driver.findElement(search);
	}
	
	
	public WebElement getPassangerBox()
	{
			return (WebElement) driver.findElement(passangers);
	}
	
	public WebElement getAdultNo()
	{
			return (WebElement) driver.findElement(adults);
	}

	
	public java.util.List<WebElement> getDay()
	{
			return (java.util.List<WebElement>) driver.findElements(day);
	}


	
	public WebElement getMonth()
	{
			return driver.findElement(month);
	}

	
	public WebElement getMonthBtn()
	{
			return driver.findElement(monthbtn);
	}
	
	public WebElement getDateBtn()
	{
			return driver.findElement(datebtn);
	}
	
	public WebElement getDeparture()
	{
			return driver.findElement(departure);
	}
	
	public WebElement getDelhi()
	{
		return driver.findElement(delhi);
	}
	
	public WebElement getDstination()
	{
		return driver.findElement(destination);
	}
	
	public WebElement getMaa()
	{
		return driver.findElement(maa);
	}
	
	
		
		
		
	
	
}
