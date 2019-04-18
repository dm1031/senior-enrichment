const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { Campus, Student } = require("./db");
const { syncAndSeed } = require("./seed");

const port = process.env.PORT || 3000;
syncAndSeed();
//middleware
app.use(bodyParser.json());

app.get("/app.js", (req, res, next) =>
  res.sendFile(path.join(__dirname, "dist", "main.js"))
);
app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);
app.get("/style.css", (req, res, next) =>
  res.sendFile(path.join(__dirname, "style.css"))
);
// API routes
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

app.put("/api/campus/:id", (req, res, next) => {
  Campus.findByPk(req.params.id)
    .then(campus => campus.update(req.body))
    .then(campus => res.send(campus))
    .catch(next);
});

app.put("/api/student/:id", (req, res, next) => {
  Student.findByPk(req.params.id)
    .then(student => student.update(req.body))
    .then(student => res.send(student))
    .catch(next);
});
// Error handling endware
app.use((err, req, res, next) => {
  let errors = [err];
  if (err.name === "SequelizeValidationError") {
    errors = err.errors;
  } else {
    errors = [{ message: err.message }];
  }
  res.status(err.status || 500).send({ errors });
});

app.listen(port, () => console.log(`listening on port ${port}`));
