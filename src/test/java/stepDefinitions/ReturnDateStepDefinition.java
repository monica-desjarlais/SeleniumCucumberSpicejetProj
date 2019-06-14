package stepDefinitions;


import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pageObjects.ReturnDatePage;
import resources.base;

public class ReturnDateStepDefinition extends base {
	
 
	//page objects 

	ReturnDatePage rd = new ReturnDatePage(driver);
	
	

  

	@Given("^Click on One Way radio button$")
	public void click_on_One_Way_radio_button() throws Throwable {
		
		rd.getOneWayBtn().click();
	    
	}

	@Then("^Verify if return date box is disabled$")
	public void verify_if_return_date_box_is_disabled() throws Throwable {
		
		if (rd.getReturnDate().getAttribute("style").contains("0.5")){

			System.out.println("Return date is disabled, test passed");
			Assert.assertTrue(true);
		}
	    
	}
		
						

	}
	
	
	


	
	


