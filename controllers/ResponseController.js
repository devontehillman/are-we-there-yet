// const db = require("../models");
const Response = require("../models/response");
const mongoose = require("mongoose");

module.exports = {
  findAllAnswers: function (req, res) {
    // const match_id = mongoose.Types.ObjectId(req.params.topicID);

    Response.aggregate([
      { $match: { topicID: req.params.topicID } },
      { $group: { _id: "$answer", count: { $sum: 1 } } },
    ])
      .then((dbModel) => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  findAll: function (req, res) {
    Response.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    Response.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    Response.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
};
