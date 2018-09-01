const path = require('path');

module.exports = (app) => {

    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        console.log("default")
    });

    app.get("/survey"), (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        console.log("survey")
    };

};