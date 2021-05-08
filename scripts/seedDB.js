const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/AreWeThereYet"
);

const userSeed = [
    {
        firstName: "Bud",
        lastName: "Weiser",
        userName: "theking",
        password: "1234",
        userType: "Instructor",
        classID: "1",
        date: new Date(Date.now())
    },
    {
        firstName: "Kaiyden",
        lastName: "Tatis",
        userName: "ktatis",
        password: "1234",
        userType: "Student",
        ClassID: "1",
        date: new Date(Date.now())
    }];

    db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  
