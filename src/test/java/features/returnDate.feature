@returnDate 
Feature: check Return Date box 

Scenario: 
	If we choose one way trip, verify if return date box is disabled
	Given Initialize the browser with chrome 
	And   Navigate to "https://www.spicejet.com" 
	Given Click on One Way radio button 
	Then  Verify if return date box is disabled 
	And close browser 
	
	
	
	
	
	
	
