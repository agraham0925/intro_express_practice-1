const express = require('express'); 
const app = express(); 

//Now attached to app, we have a bunch of methods to start our server and send responses to the client


//localhost:3000 in the browser will make a get resquest
//the get function will respond 
app.get('/', (request, response) => {
	response.send("Hi! I'm the Server.")
})

//localhost:3000/anythingWeWant in the browser
app.get('/anythingWeWant', (request, response) => {
	response.send("Whatever we want.")
})

//Write a route/restart server/ go to it

app.get('/myCatLydiaSays', (request, response) => {
	response.send("MeeeeOOOOOW.")
})

//wrote after nodemon/will automatically update
app.get('/tacos', (request, response) => {
	response.send('Yum')
})



app.listen(3000, () => {
	console.log('Server is listening on Port 3000');
	
})

