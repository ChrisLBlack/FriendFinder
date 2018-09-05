const friendsData = require('../data/friends.js');

module.exports = function (app) {
  app.get("/api/friends", (req, res) => {
    return res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);
    console.log(req.body);
    // res.json(true);

  });
};