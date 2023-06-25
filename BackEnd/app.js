const express = require("express");
const app = express();
const port = 4000;

const mongoose = require("mongoose");

const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const dbURL = "mongodb://localhost:27017/FoodBlog";

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error in connecting to database", err);
  });

const user = require("./models/user");
const food = require("./models/food");

// Signup Page Logic

app.post("/signup", (req, res) => {
  user
    .findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    })
    .then((doc) => {
      if (doc) {
        return res
          .status(403)
          .send({ message: "username or email already exists" });
      } else {
        new user({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        })
          .save()
          .then(() => {
            res.status(200).send({ message: "Signed Up successfully" });
          })
          .catch(() => {
            res.status(500).send({ message: "Error while creating user" });
          });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "There was an error, Try again later" });
    });
});

// Login Page Logic

app.post("/", (req, res) => {
  user
    .findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    })
    .then((doc) => {
      if (doc) {
        if (doc.password === req.body.password) {
          res
            .status(200)
            .send({ message: `Logged in successfully as ${doc.username}` });
        } else {
          res
            .status(400)
            .send({ message: "username/email or password is invalid" });
        }
      } else {
        res.status(403).send({ message: "username/email does not exists. Signup!" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "There was an error, Try again later" });
    });
});

app.post("/home/addFood", (req, res) => {
  new food({
    title: req.body.title,
    author: req.body.author,
    imageURL: req.body.imageURL,
  })
    .save()
    .then(() => {
      res
        .status(200)
        .send({ message: `${req.body.title} added successfully` });
    })
    .catch(() => {
      res.status(500).send({ message: `Error while adding ${req.body.title}` });
    });
});

app.get("/home/foods", (req, res) => {
  food
    .find()
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(500).send({ message: "Error while fetching foods" });
    });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
