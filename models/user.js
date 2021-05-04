const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const promptSchema = new Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  topic: { type: String, required: true },
  promptType: { type: String, required: true },
  date: { type: Date, default: Date.now },
  responses: { type: mongoose.Schema.Types.String, ref: "responses" },
});

const Prompt = mongoose.model("Prompt", promptSchema);

module.exports = Prompt;
