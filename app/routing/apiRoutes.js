const friendsData = require('../data/friends.js');

module.exports = function (app) {
  app.get("/api/friends", (req, res) => {
    return res.json(friendsData);
  });

  app.post("api/friends", (req, res) => {
    friendsData.push(req.body);
    res.json(true);

  })
};