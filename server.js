const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { Campus, Student, syncAndSeed } = require("./db");

const port = process.env.PORT || 3000;
syncAndSeed();

app.use(bodyParser.json());
app.get("/app.js", (req, res, next) =>
  res.sendFile(path.join(__dirname, "dist", "main.js"))
);
app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/api/campuses", (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next);
});

app.get("/api/students", (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next);
});

app.post("/api/create/campus", (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

app.post("/api/create/student", (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

app.delete("/api/campus/:id", (req, res, next) => {
  Campus.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.delete("/api/student/:id", (req, res, next) => {
  Student.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.listen(port, () => console.log(`listening on port ${port}`));
