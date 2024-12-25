
var entertainment=document.getElementById("entertainment")
var auther=document.getElementById("name").value;
var title=document.getElementById("title").value;
var description=document.getElementById("description").value;
var link=document.getElementById("link").value;
var url =document.getElementById("url").value;
var date=document.getElementById("date").value;
var content=document.getElementById("content").value;

entertainment.addEventListener('click',function(){
    // var auther=document.getElementById("name").value;
    // var title=document.getElementById("title").value;
    // var description=document.getElementById("description").value;
    // var link=document.getElementById("link").value;
    // var url =document.getElementById("url").value;
    // var date=document.getElementById("date").value;
    // var content=document.getElementById("content").value;

    fetch("http://localhost:3000/entertainment",{
        method:'POST',
        body:JSON.stringify({
            author: auther,
            title: title,
            description: description,
            url: link,
            urlToImage: url,
            publishedAt: date,
            content: content
        }),
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json;
    })
    .then(function(data){
        console.log(data);
    })
})

//sports

var sports=document.getElementById("sports")
sports.addEventListener('click',function(){
    var auther=document.getElementById("name").value;
    var title=document.getElementById("title").value;
    var description=document.getElementById("description").value;
    var link=document.getElementById("link").value;
    var url =document.getElementById("url").value;
    var date=document.getElementById("date").value;
    var content=document.getElementById("content").value;

    fetch("http://localhost:3000/sports",{
        method:'POST',
        body:JSON.stringify({
            author: auther,
            title: title,
            description: description,
            url: link,
            urlToImage: url,
            publishedAt: date,
            content: content
        }),
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        }
    })
    .then(function(respons){
        return respons.json;
    })
    .then(function(dat){
        console.log(dat);
    })
})

//generalnews

var general=document.getElementById("generalnews")
general.addEventListener('click',function(){
    // var auther=document.getElementById("name").value;
    // var title=document.getElementById("title").value;
    // var description=document.getElementById("description").value;
    // var link=document.getElementById("link").value;
    // var url =document.getElementById("url").value;
    // var date=document.getElementById("date").value;
    // var content=document.getElementById("content").value;

    fetch("http://localhost:3000/general",{
        method:'POST',
        body:JSON.stringify({
            author: auther,
            title: title,
            description: description,
            url: link,
            urlToImage: url,
            publishedAt: date,
            content: content
        }),
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json;
    })
    .then(function(data){
        console.log(data);
    })
})

//technology

var technology=document.getElementById("technology")
technology.addEventListener('click',function(){
    // var auther=document.getElementById("name").value;
    // var title=document.getElementById("title").value;
    // var description=document.getElementById("description").value;
    // var link=document.getElementById("link").value;
    // var url =document.getElementById("url").value;
    // var date=document.getElementById("date").value;
    // var content=document.getElementById("content").value;

    fetch("http://localhost:3000/technology",{
        method:'POST',
        body:JSON.stringify({
            author: auther,
            title: title,
            description: description,
            url: link,
            urlToImage: url,
            publishedAt: date,
            content: content
        }),
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json;
    })
    .then(function(data){
        console.log(data);
    })
})

//business

var business=document.getElementById("business")
business.addEventListener('click',function(){
    // var auther=document.getElementById("name").value;
    // var title=document.getElementById("title").value;
    // var description=document.getElementById("description").value;
    // var link=document.getElementById("link").value;
    // var url =document.getElementById("url").value;
    // var date=document.getElementById("date").value;
    // var content=document.getElementById("content").value;

    fetch("http://localhost:3000/business",{
        method:'POST',
        body:JSON.stringify({
            author: auther,
            title: title,
            description: description,
            url: link,
            urlToImage: url,
            publishedAt: date,
            content: content
        }),
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json;
    })
    .then(function(data){
        console.log(data);
    })
})

//generalnews

var headlines=document.getElementById("headlines")
headlines.addEventListener('click',function(){
    // var auther=document.getElementById("name").value;
    // var title=document.getElementById("title").value;
    // var description=document.getElementById("description").value;
    // var link=document.getElementById("link").value;
    // var url =document.getElementById("url").value;
    // var date=document.getElementById("date").value;
    // var content=document.getElementById("content").value;

    fetch("http://localhost:3000/dailyupdates",{
        method:'POST',
        body:JSON.stringify({
            author: auther,
            title: title,
            description: description,
            url: link,
            urlToImage: url,
            publishedAt: date,
            content: content
        }),
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json;
    })
    .then(function(data){
        console.log(data);
    })
})
