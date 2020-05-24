//default next server
// module.exports = function(req, res, next){
//   console.log(req);
//   next();
// };


//using express.js

var express = require("express");
const bodyParser = require('body-parser');
var app = express();
var fetch = require("node-fetch");
app.use(bodyParser.json());
app.use(express.static('public'));
//app.use(express.json());
// //using twit package

// var Twit = require('twit');

// var configTwit = require('../node_modules/configTwits');
// console.log(configTwit);

// var T = new Twit(configTwit);

// var params= {
//   q: 'COVID-19',
//   count: 2
// }
// var feed;
// T.get('search/tweets', params, gotData);

// function gotData(err, data, response){
//   console.log(data);
//    feed = data;
// };

// app.get('/tweeter', (req, res, next) => {
//   res.json(feed);
// });

// app.listen(3000);
// app.get('/covidnews', async function(req, res){
//   const api_url = await  fetch("http://newsapi.org/v2/top-headlines?country=au&apiKey=09039a8e8c714f1f8b6380fdcd4db654");

//     const jsonObj = await api_url.json();

//     res.json(jsonObj);
// });

app.post('/client', async function(request, response){
  console.log(request.body.section);
  const api_url = await  fetch("http://newsapi.org/v2/top-headlines?country="+request.body.section+"&apiKey=09039a8e8c714f1f8b6380fdcd4db654");

    const jsonObj = await api_url.json();
//console.log(jsonObj);
    response.json(jsonObj.articles);
  //response.end();
});

// const api_url = await res_fetch.json();
//     const fetch_res  = await fetch(api_url);
// console.log(jsonObj.articles[0].urlToImage);


app.get('/coronavirusIndia', async function(req, res){
  const api_url = await  fetch("https://api.covid19india.org/data.json");

    const jsonObj = await api_url.json();
    res.json(jsonObj);
});

// const api_u = await res_fetch.json();
//     //const fetch_res  = await fetch(api_url);
//     console.log(api_u);
// res.json(api_u);rs




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
console.log(j);
   res.json(j);
 });

module.exports = {
  path: "/api/",
  handler: app
};
