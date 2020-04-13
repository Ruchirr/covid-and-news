//default next server
// module.exports = function(req, res, next){
//   console.log(req);
//   next();
// };


//using express.js

var express = require("express");
var app = express();
var fetch = require("node-fetch");
// app.get('/covidnews', async function(req, res){
//   const api_url = await  fetch("http://newsapi.org/v2/top-headlines?country=au&apiKey=eb1ed87055d544a6896c608a5bb3c7ad");

//     const jsonObj = await api_url.json();

//     res.json(jsonObj);
// });

//const api_url = await res_fetch.json();
    //const fetch_res  = await fetch(api_url);
//console.log(jsonObj.articles[0].urlToImage);

app.get('/coronavirus', async function(req, res) {

  //const api_url = `https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php`
   const res_fetch = await  fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "b48b2ee0femsh3436bac103c4607p1d6476jsn5585de1c36e2"
    }
  });
   const jsono = await res_fetch.json();
var j = [];
for(var i=1;i<jsono.countries_stat.length;i++){
    j.push(jsono.countries_stat[i]);
}
   res.json(j);
 });

module.exports = {
  path: "/api/",
  handler: app
};
