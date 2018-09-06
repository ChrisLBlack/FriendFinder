# FriendFinder

This is a full stack app that uses several different technologies to produce an app that is ultimately deployed using Heroku ( https://friendfinder1099.herokuapp.com/ ).  Node.js, jQuery, and Bootstrap were mainly used in this app.

The user will add provide data via the survey.  Using jQuery, info is then pulled from the input fields and saved to an object.  The object is then sent via a POST to the server.  The logic on the backend then compares the new user data vs current users already in the database and then produces a match to the user that best matches them per their answers provided from the survey.  A modal is then prompted for the user showing them their best friend match.  
