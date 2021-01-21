const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const filePath = "./data.json";
const moviesData = require("./data.json");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

app.prepare().then(() => {
  const server = express();
  const handle = app.getRequestHandler();

  // middlewares
  server.use(bodyParser.json());

  // apis
  server.get("/api/v1/movies", (req, res) => {
    res.send(moviesData);
  });

  server.get("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const movie = moviesData.find((m) => m.id === id);

    return res.send(movie);
  });

  server.post("/api/v1/movies", (req, res) => {
    const movie = req.body;

    // save movie to global bariable
    moviesData.push(movie);

    // save movie to file
    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(moviesData, null, 2);
    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json("Movie has been succesfuly added!");
    });
  });

  server.patch("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const movie = req.body;

    // update movie variable
    const movieIndex = moviesData.findIndex((m) => m.id === id);
    moviesData[movieIndex] = movie;

    // save file
    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(moviesData, null, 2);
    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json(movie);
    });
  });

  server.delete("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;

    // remove movie of global variable
    const movieIndex = moviesData.findIndex((m) => m.id === id);
    moviesData.splice(movieIndex, 1);

    // save file
    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(moviesData, null, 2);

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json("Movie has been succesfuly deleted!");
    });
  });

  const PORT = process.env.PORT || 3000;
  server.use(handle).listen(PORT, (err) => {
    if (err) throw err;
    console.log("> Ready on port " + PORT);
  });
});
