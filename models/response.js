const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const responseSchema = new Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  answer: { type: String, required: true },
  date: { type: Date, default: Date.now },
  topicID: { type: String, required: true },
  // promptID: { type: mongoose.Schema.Types.ObjectId, ref: "Prompt" },
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
