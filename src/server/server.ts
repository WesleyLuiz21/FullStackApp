import express from "express";

const server = express()

server.use(express.static("dist")); // to take any static content from the "disc" folder
server.set("view engine", "ejs"); // allow us to use the ejs library

server.use("/", (req, res) => { // this is where logic for the server works

   res.render("index", {
      content: "EJS is cool", 
   });

});

server.listen("8080", "0.0.0.0", () => {
   console.info(
    "Express server is listening at http://0.0.0.0:8080"
   );
})