// api key c202163307084196ab5947625405dbdc
//variables
// const cors = require('cors');
// app.use(cors());

const generalBtn = document.getElementById("Genral");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");
const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails =document.getElementById("newsdetails");
//arrays
var newsDataArr =[];



//apis3000
const ENTERTAINMENT_NEWS="http://localhost:3000/entertainment";
const GENERAL_NEWS="http://localhost:3000/general";
const TECHNOLOGY_NEWS=" http://localhost:3000/technology";
const SPORTS_NEWS="http://localhost:3000/sports";
const BUSINESS_NEWS="http://localhost:3000/business";
const SEARCH_NEWS="http://localhost:3000/";
const HEADLINES="http://localhost:3000/dailyupdates";

window.onload=function(){
    newsType.innerHTML="<h2>Daily Updates</h2>";


    fetchHeadinglines();

};

//button triggers
generalBtn.addEventListener("click",function() {
    newsType.innerHTML="<h2>Academics</h2>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click",function() {
    newsType.innerHTML="<h2>Tech Stuff</h2>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click",function() {
    newsType.innerHTML="<h2>Sports</h2>";
    fetchSportsNews();
});

entertainmentBtn.addEventListener("click",function () {
<<<<<<< Updated upstream
    newsType.innerHTML="<h2>Extra-Curricular Activities</h2>";
=======
    newsType.innerHTML="<h2>Extra-Curricular Activities </h2>";
>>>>>>> Stashed changes
    fetchEntertainmentNews();
});

technologyBtn.addEventListener("click",function () {
    newsType.innerHTML="<h2>Clubs</h2>";
    fetchTechnologyNews();
});

searchBtn.addEventListener("click",function () {
    newsType.innerHTML="<h2>Search : "+newsQuery.value+"</h2>";
    fetchQueryNews();
});

//functions 

const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS);
    if(response.status >=200 && response.status<= 300){
        const myJson = await response.json();
        newsDataArr =[];
        newsDataArr = myJson;
        console.log(myJson);

    }else{

    }

    displayNews();

}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS);
    if(response.status >=200 && response.status<= 300){
        const myJson = await response.json();
        newsDataArr =[];
        newsDataArr = myJson;
        console.log(myJson);

    }else{

    }

    displayNews();

}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS);
    if(response.status >=200 && response.status<= 300){
        const myJson = await response.json();
        newsDataArr =[];
        newsDataArr = myJson;
        console.log(myJson);

    }else{

    }

    displayNews();

}

const fetchQueryNews = async () => {
    const response = await fetch(SEARCH_NEWS+newsQuery.value);
    if(response.status >=200 && response.status<= 300){
        const myJson = await response.json();
        newsDataArr =[];
        newsDataArr = myJson;
        console.log(myJson);

    }else{

    }

    displayNews();

}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS);
    if(response.status >=200 && response.status<= 300){
        const myJson = await response.json();
        newsDataArr =[];
        newsDataArr = myJson;
        console.log(myJson);

    }else{

    }

    displayNews();

}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS);
    if(response.status >=200 && response.status<= 300){
        const myJson = await response.json();
        newsDataArr =[];
        newsDataArr = myJson;
        console.log(myJson);

    }else{

    }

    displayNews();

}

const fetchHeadinglines = async () => {
    const response = await fetch(HEADLINES);
    if(response.status >=200 && response.status<= 300){
        const myJson = await response.json();
        newsDataArr =[];
        newsDataArr = myJson;
        console.log(myJson);

    }else{

    }

    displayNews();

}




function displayNews(){
    newsdetails.innerHTML="";
    if(newsDataArr.length==0){
        newsdetails.innerHTML = "<h3>NO DATA FOUND</h3>";
        return;
    }
    newsDataArr.forEach(news=>{
        var date=news.publishedAt.split("T");


        var col=document.createElement('div');
        col.className="col-sm-12 col-md-4  col-lg-3 p-2";


        var card = document.createElement('div');
        card.className="p-2";


        var image=document.createElement('img');
        image.className="imgg";
        image.setAttribute("height","matchparent")
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody=document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className ="card-title titlee";
        newsHeading.innerHTML=news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className="text-primary";
        dateHeading.innerHTML=date[0];

        var discription=document.createElement('p');
        discription.className="text-dark";
        discription.innerHTML=news.description;
        
        var link =document.createElement('a');
        link.setAttribute("target","_blank");
        link.innerHTML="Read more";
        link.href=news.url;
        link.className="btn btn-dark";
        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);
        col.appendChild(card);

        newsdetails.appendChild(col);
        
    })
}
