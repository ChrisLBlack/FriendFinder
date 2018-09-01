app.get("/"), (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
    console.log("default")
};

app.get("/survey"), (req, res) => {
    res.sendFile(path.join(__dirname, "survey.html"));
    console.log("survey")
};