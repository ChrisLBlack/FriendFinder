//Dependencies
const friendsData = require('../data/friends.js');
const path = require("path");
//exporting data to make available to rest of app
module.exports = function (app) {
  //route to send info to DOM frm friends.js
  app.get("/api/friends", (req, res) => {
    return res.json(friendsData);
  });
//route to post data from user input and to compare users for best match
  app.post("/api/friends", function (req, res) {
    const newData = req.body;

    //   // console.log(newData.scores);

    //matching friends
    let matchName = "";
    let matchImage = "";
    let total = 10000;

    for (let i = 0; i < friendsData.length; i++) {
      let diff = 0;

      for (let check in newData.scores) {
        let currentInfo = parseInt(friendsData[i].scores);
        let newInfo = parseInt(newData.scores[check]);
        diff = Math.abs(currentInfo - newInfo);
      };

      if (diff < total) {
        total = diff;
        matchName = friendsData[i].name;
        matchImage = friendsData[i].photo;
      }
    }
    //returning response
    res.json({ matchName: matchName, matchImage: matchImage });
    //pushing user input to database (friends.js)
    friendsData.push(newData);
  });
};