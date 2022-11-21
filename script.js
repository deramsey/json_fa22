const rURL = "https://raw.githubusercontent.com/deramsey/json_test/main/sol.json";
const pURL = "https://pokeapi.co/api/v2/pokemon/mudkip";

const stat = ["Platinum", "Gold"];

var request = new XMLHttpRequest();
var prequest = new XMLHttpRequest();

request.open("GET", rURL);
request.responseType = 'json';

prequest.open("GET", pURL);
prequest.responseType = 'json';
prequest.send();

request.send();

request.onload = () => {
    classInfo(request.response);
}

prequest.onload = () => {
    showShiny(prequest.response);
}

function classInfo(data){
    for(let i of stat){
        document.querySelector("body").innerHTML += `<section class='${i}'></section>`;
    }
    for(let d of data){
        document.querySelector(`.${d.level}`).innerHTML += "<h1>"+d.course_id+": "+d.course_name+"</h1><p>Instructor name: "+d.instructor_name+"</p>";
    }
}

function showShiny(data){
    document.querySelector("body").innerHTML += `<img src=${data.sprites.front_shiny} />`
}