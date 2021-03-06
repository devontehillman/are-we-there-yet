const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const topicSchema = new Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  topic: { type: String, required: true },
  questionType: { type: String, required: true },
  date: { type: Date, default: Date.now },
  // responses: [{
  //   userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  //   answer: { type: String, required: true },
  //   date: { type: Date, default: Date.now },
  // }]
});
const Topic = mongoose.model("Topic", topicSchema);
module.exports = Topic;