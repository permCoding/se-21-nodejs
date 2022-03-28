const express = require("express")
const path = require("path");

const app = express();

app.listen(3000, "localhost", () => console.log("http://localhost:3000"));

app.use("/static", express.static(path.join(__dirname, "static")));

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index.ejs", { 
        feeds: [
            { login: "AAA", feed: "12 1273618732 912 3129" },
            { login: "BBB", feed: "99999999 kwfbwek 2 912 3129" }
        ]    
    })
});

app.get("/feedback", (req, res) => {
    res.render("feed.ejs");
});
