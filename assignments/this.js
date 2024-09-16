/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Globlal Binding - If I use this keyword without any restriction, it points to the browser.
* 2. Implicit Binding - When I use this with an object and a method it connects the method to the object.
* 3. New Binding - using new keyword 'this' binds constructor functions for objects
* 4. Explicit binding -  binds functions together using methods such as .call and .apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function theWorld()
{
    console.log(this);
}
theWorld();
// Principle 2

// code example for Implicit Binding
const airline = {
    name : 'Delta',
    location: 'ICN',
    group: 'Sky Team',
    flights: function(){
        return `${this.name} flies to ${this.location} everyday.`;
    }
}
console.log(airline.flights());

// Principle 3

// code example for New Binding
function DeltaAirline(airlinename,arrivalcountry, arrivaldate) {
    this.name = airlinename;
    this.location = arrivalcountry;
    this.date = arrivaldate;
    this.information = function (){
        console.log(`${this.name} flies to ${this.location} on ${this.date}.` );
    }
}
const firstFligth = new DeltaAirline ('Delta','ICN','06/15/2019');
firstFligth.information();

// Principle 4

// code example for Explicit Binding
const flightAttendent = {
    name : 'Daisy',
    age : 26,
}
function scheduleDaisy(date1,date2,date3){
    return `${this.name} is scheduled on the ${date1}, ${date2}, ${date3} flights.`
}
const flights = ['ICN', 'PEK', 'DTW']

console.log(scheduleDaisy.apply(flightAttendent,flights));