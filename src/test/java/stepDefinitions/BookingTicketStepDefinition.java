package stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pageObjects.BookingTicketPage;
import resources.base;

public class BookingTicketStepDefinition extends base {

	// page objects

	BookingTicketPage bt = new BookingTicketPage(driver);

	@Given("^Choose Delhi from the departure dropdown list$")
	public void choose_Delhi_from_the_departure_dropdown_list() throws Throwable {

		bt.getDeparture().click();
		// choose Delhi
		bt.getDelhi().click();

	}

	@And("^Choose Chennai from the arrival dropdown list$")
	public void choose_Chennai_from_the_arrival_dropdown_list() throws Throwable {

		bt.getDstination().click();
		// choose Chennai
		bt.getMaa().click();

	}

	@And("^Choose the depart date of August (\\d+)$")
	public void choose_the_depart_date_of_August(int arg1) throws Throwable {

		WebElement element = bt.getDateBtn();
		Actions actions = new Actions(driver);
		actions.moveToElement(element).click().build().perform();
		
		// select the month of August
		while (!bt.getMonth().getText().contains("August")) {
			bt.getMonthBtn().click();
		}

		// select the day of 23
		// take all the items present in the table (.day) and loop through them
		

		List<WebElement> dates = bt.getDay();
		int count = dates.size(); 
		for (int i = 0; i < count; i++) {
			String text = dates.get(i).getText();
			if (text.equalsIgnoreCase("23")) {
				dates.get(i).click();
				break;
			}
		}

	}

	@And("^Choose (\\d+) adults$")
	public void choose_adults(int arg1) throws Throwable {
		
		bt.getPassangerBox().click();

		// select 5 adults
		
		int i = 1;

		for (i = 1; i < 5; i++) {
			// click on + button for 2 times
			bt.getAdultNo().click();

		}

		System.out.println(bt.getPassangerBox().getText()); // 3 adults

		
	}

	

	@Given("^Click on search button$")
	public void click_on_search_button() throws Throwable {
		
		bt.getSearchBtn().click();
		

	}

	@Then("^Check if we land on the Search Flights page$")
	public void check_if_we_land_on_the_Search_Flights_page() throws Throwable {
		//wait for the page to load
		WebDriverWait d = new WebDriverWait(driver, 10);
		d.until(ExpectedConditions.urlToBe("https://book.spicejet.com/Select.aspx"));
		String url = driver.getCurrentUrl();
		Assert.assertTrue(url.contains("https://book.spicejet.com/Select.aspx"));

	}
}
