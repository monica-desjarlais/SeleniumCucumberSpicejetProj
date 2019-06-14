@bookingTicket 
Feature: verify the booking functionality 

Scenario: Book a trip from Delhi to Chennai, on August 23, for 5 adults 
	Given Initialize the browser with chrome 
	And   Navigate to "https://www.spicejet.com" 
	Given Choose Delhi from the departure dropdown list 
	And   Choose Chennai from the arrival dropdown list 
	And   Choose the depart date of August 23 
	And   Choose 5 adults 
	Given Click on search button 
	Then  Check if we land on the Search Flights page 
	And close browser 
	
	
	
	
	
	
	
