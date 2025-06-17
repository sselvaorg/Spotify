const mongoose = require("mongoose");
const joi = require("joi");

const ObjectId = mongoose.Schema.Types.ObjectId;

const playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: ObjectId, ref: "user", required: true },
  desc: { type: String },
  songs: { type: Array, default: [] },
  img: { type: String },
});

const validate = (playlist) => {
  const Schema = joi.object({
    name: joi.string().required(),
    user: joi.string().required(),
    desc: joi.string().allow(""),
    songs: joi.array().items(joi.string),
    img: joi.string().allow(""),
  });
  return Schema.validate(playlist);
};

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = { Playlist, validate };
