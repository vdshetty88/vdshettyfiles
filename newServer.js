var express = require('express');
var mysql = require("mysql");
var app = express();

var connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "AnimalsDatabase"
});

connection.connect(function() 
{
    if(!!error){
        console.log("error");
    } else {
        console.log("Connected");
    }
});

app.get('/', function(req, res) 
{
    connection.query("SELECT * FROM AnimalsDatabase", function(error, rows, fields){
    if(!!error){
        console.log("error");
    } else {
        console.log("Connected");
    }
});
            app.listen(3000);})