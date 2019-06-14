$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bookingTicket.feature");
formatter.feature({
  "line": 2,
  "name": "verify the booking functionality",
  "description": "",
  "id": "verify-the-booking-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@bookingTicket"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Book a trip from Delhi to Chennai, on August 23, for 5 adults",
  "description": "",
  "id": "verify-the-booking-functionality;book-a-trip-from-delhi-to-chennai,-on-august-23,-for-5-adults",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to \"https://www.spicejet.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Choose Delhi from the departure dropdown list",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Choose Chennai from the arrival dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Choose the depart date of August 23",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Choose 5 adults",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on search button",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Check if we land on the Search Flights page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefinition.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 26615356685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.spicejet.com",
      "offset": 13
    }
  ],
  "location": "GeneralStepDefinition.navigate_to(String)"
});
formatter.result({
  "duration": 38220078539,
  "status": "passed"
});
formatter.match({
  "location": "BookingTicketStepDefinition.choose_Delhi_from_the_departure_dropdown_list()"
});
formatter.result({
  "duration": 5583444302,
  "status": "passed"
});
formatter.match({
  "location": "BookingTicketStepDefinition.choose_Chennai_from_the_arrival_dropdown_list()"
});
formatter.result({
  "duration": 4889597632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 33
    }
  ],
  "location": "BookingTicketStepDefinition.choose_the_depart_date_of_August(int)"
});
formatter.result({
  "duration": 25883900937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "BookingTicketStepDefinition.choose_adults(int)"
});
formatter.result({
  "duration": 10783422989,
  "status": "passed"
});
formatter.match({
  "location": "BookingTicketStepDefinition.click_on_search_button()"
});
formatter.result({
  "duration": 23294089788,
  "status": "passed"
});
formatter.match({
  "location": "BookingTicketStepDefinition.check_if_we_land_on_the_Search_Flights_page()"
});
formatter.result({
  "duration": 550717317,
  "status": "passed"
});
formatter.match({
  "location": "GeneralStepDefinition.close_browser()"
});
formatter.result({
  "duration": 13980438480,
  "status": "passed"
});
formatter.uri("checkBrokenLinks.feature");
formatter.feature({
  "line": 2,
  "name": "look for the broken links",
  "description": "",
  "id": "look-for-the-broken-links",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@checkBrokenLinks"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Check if all the links are working properly on the home page",
  "description": "",
  "id": "look-for-the-broken-links;check-if-all-the-links-are-working-properly-on-the-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to \"https://www.spicejet.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Count and print the total number of links",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Verify any broken links and return the server status",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefinition.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 11663982634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.spicejet.com",
      "offset": 13
    }
  ],
  "location": "GeneralStepDefinition.navigate_to(String)"
});
formatter.result({
  "duration": 27097751554,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "GeneralStepDefinition.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("returnDate.feature");
formatter.feature({
  "line": 2,
  "name": "check Return Date box",
  "description": "",
  "id": "check-return-date-box",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@returnDate"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "",
  "description": "If we choose one way trip, verify if return date box is disabled",
  "id": "check-return-date-box;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to \"https://www.spicejet.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on One Way radio button",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Verify if return date box is disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefinition.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 10368600690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.spicejet.com",
      "offset": 13
    }
  ],
  "location": "GeneralStepDefinition.navigate_to(String)"
});
formatter.result({
  "duration": 30679353527,
  "status": "passed"
});
formatter.match({
  "location": "ReturnDateStepDefinition.click_on_One_Way_radio_button()"
});
formatter.result({
  "duration": 3322536951,
  "status": "passed"
});
formatter.match({
  "location": "ReturnDateStepDefinition.verify_if_return_date_box_is_disabled()"
});
formatter.result({
  "duration": 493656438,
  "status": "passed"
});
formatter.match({
  "location": "GeneralStepDefinition.close_browser()"
});
formatter.result({
  "duration": 3286610755,
  "status": "passed"
});
});