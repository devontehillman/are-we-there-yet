const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import Response from "./response";

const promptSchema = new Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  topic: { type: String, required: true },
  questionType: { type: String, required: true },
  date: { type: Date, default: Date.now },
  responses: [Response]
});

const Prompt = mongoose.model("Prompt", promptSchema);

module.exports = Prompt;
