const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes");
const path = require('path')

// const users = require("./routes/api/users");
// const index = require("./routes/api/index");
// const topics = require("./routes/api/topic");
// const responses = require("./routes/api/response");

const app = express();

// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
//const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhost/AreWeThereYet",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

//   // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/AreWeThereYet");

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
// app.use("/api/users", users);
// app.use("/api", index);
// app.use("/api", topics);
// app.use("/api/responses", responses);
//app.use(routes)
app.use(routes);

// serve static assets if we are in production 
if (process.env.NODE_ENV==='production'){
  // set a static folder 
  app.use(express.static('client/build'))

  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
