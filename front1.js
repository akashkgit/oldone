//creating an app for storing container
const app = document.getElementById('root');
const logo = document.createElement('img');
//logo.src = 'globe1.jpg';
baseURL = 'https://restcountries.eu/rest/v2/name/';
finalURl='?fullText=true';
//creating a container to store card 
const container = document.createElement('div');
container.setAttribute('class', 'container');
//creation of card
const card = document.createElement('div');
card.setAttribute('class', 'card');
container.appendChild(card);
// 
var name="";
var coun_json;
//
app.appendChild(logo);
app.appendChild(container);
//getCountry from api using fetch
var c=0;
function getCountry(ele){ name=document.getElementById('searchTxt').value;
 


sendapi(name, (d) => {
console.log(d);coun_json=d;
const h1 = document.createElement('h1');
const ff1 = document.createElement('img');
// receiving the flag and country name
ff1.src=d[0].flag;
h1.innerText=name.toUpperCase();
ff1.width="200";
ff1.height="200";
// appending it to the card
card.appendChild(ff1);
card.appendChild(h1);
});var curDivContent = document.getElementById(ele).innerHTML;
document.getElementById(ele).innerHTML = curDivContent;c++;}
card.addEventListener("click",function(){window.location.href="NextPage.html"})
function getCountryName(){ name=document.getElementById('searchTxt').value;

sendapi(name, (d) => {
console.log(d);coun_json=d;
const h1 = document.createElement('h1');
const h2 = document.createElement('h1');
const h3 = document.createElement('h1');
const h4 = document.createElement('h1');

const ff1 = document.createElement('img');
// receiving the flag and country name
ff1.src=d[0].flag;
h1.innerText=name.toUpperCase();
h2.innerText=d[0].capital;
h3.innerText=d[0].callingCodes;
h4.innerText=d[0].region;
console.log(h2);
ff1.width="200";
ff1.height="200";
var x="country";
// appending it to the card
card.appendChild(ff1);

card.appendChild(h1);

card.appendChild(h2);

card.appendChild(h3);

card.appendChild(h4);
});}
//API Function
function sendapi(n, c){
fetch(baseURL+n+finalURl)
  .then(function(response) {
  	console.log(response	);
  		return response.json();
    
  }) .then(function(myJson) {
    console.log((myJson));
    c(myJson, null)
  });

}