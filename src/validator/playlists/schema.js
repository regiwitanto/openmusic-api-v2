const Joi = require('joi');

const playlistSchema = Joi.object({
  name: Joi.string().min(1).required(),
});

module.exports = playlistSchema;
