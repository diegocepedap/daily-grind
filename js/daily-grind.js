/*
Here are the main things we'll likely need to store for each coffee:

name - the name of the coffee
pic - the picture of the coffee
color - the color associated with the coffee
alt - the alt tag identifying the coffee
day - the day of the week 
desc - a description of the coffee

*/
let myDate = new Date();

let today = myDate.getDay();

let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);



function coffeeTemplate(coffee){

     return `
     <p>
             <img src="${coffee.pic}" alt="${coffee.alt}" id = "coffee"/>
             <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong 
             class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
     `;
 
 }
//test today = 3;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

 today = parseInt(today);

switch(today){

    case 0:
        today = "Sunday";

        coffee = {
            name: "Caramel-latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            color: "yellow",
            day: "Sunday",
            desc: `Caramel-latte contains espresso, frothed milk, and caramel sauce`
        };
    break;

    case 1:
        today = "Monday";

        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            color: "pink",
            day: "Monday",
            desc: `Bubble tea contains black tea, milk, ice, and chewy tapioca pearls`
        };
    break;

    case 2:
        today = "Tuesday";

        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha",
            color: "brown",
            day: "Tuesday",
            desc: `Mocha  a shot of espresso is combined with a chocolate powder or syrup, followed by milk or cream`
        };

    break;
    case 3:
        today = "Wednesday";

        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a frappaccino",
            color: "black",
            day: "wednesday",
            desc: `A frappaccino contains a line of iced, blended coffee with whipped cream and caramel syrup. `
        };

    break;
    case 4:
        today = "Thursday";

        coffee = {
            name: "Pumpkin-spice-latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin-spice-latte",
            color: "blue",
            day: "Thursday",
            desc: `A  Pumpkin-spice-latte contains a combination of pumpkin, cinnamon, nutmeg and clove`
        };

    break;
    case 5:
        today = "Friday";

        coffee = {
            name: "drip",
            pic: "images/drip.jpg",
            alt: "A picture of a drip",
            color: "green",
            day: "friday",
            desc: `We filtering hot water over ground coffee`
        };

    break;
    case 6:
        today = "Saturday";

        coffee = {
            name: "cold-brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold-brew",
            color: "red",
            day: "saturday",
            desc: `A cold coffee!`
        };

    break;
    default:
        today ="Day is unknown!";
}


document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);