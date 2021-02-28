const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.listen (port,() => { console.log("Server is running")})
app.use(express.static("public"));

var items= [];




app.get("/", (req, res) => {

var today = new Date();

var today  = new Date();
const options = { weekday: "long",  month: "long", day: "numeric" };


var currentDay = today.toLocaleDateString("en-UK", options);


res.render('list', {dayOf: currentDay, newItems: items});
console.log(items.length);
});

app.post('/', function (req, res) {
var item = req.body.list;

items.push(item);
res.redirect("/");

});
