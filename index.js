/*
//running js on node

const sum = (num1, num2) => {

    return num1 + num2;
}

const result = sum(2, 3);

console.log (result); //print out result
//run node in terminal by typing node index.js
*/

/*
//Write files to the system
const fs = require('fs'); //require is a built in function

const generateFile = () => {
    //try catch approach
    try {
        fs.writeFileSync('data.txt', 'Hi, this file was made with Node'); //usually use dingle quote
    } catch (err) {
        console.log(err);
    }
}
//call the function
generateFile();
*/

/*
//run file on browser
const http = require('http');

http.createServer(function (req, res) {
    res.write('Server started. Hi!!!');
    res.end();
}).listen(8080);
*/

/*
//import file
const myModule = require('./my-module');

const date = myModule();

console.log(date);
*/

//node_modules files can be auto generated with npm install anytime

//require express
const express = require('express');

//initializing the express app
const app = express(); 

//specify a port to listen on localhost:9000
const port = 9000;

//define API/urls
app.get('/', (req, res) => {
    res.send("Hi from the express server");
});

app.get('/api/cats', (req, res) => {

    //call to database

    //return dummy data
    const cats = ["British Shorthair", "Ragdoll", "Russian Blue"]
    
    //Sending a response should be in JSON
    res.send(JSON.stringify(cats));
});


//running the express http server on the port we specified
app.listen(port, () => {
    console.log("Listening on port", port);
});

