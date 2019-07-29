var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  bio: { type: String, required: false },
  facebook_url: { type: String, required: false },
  first_name: { type: String, required: true },
  instagram_url: { type: String, required: false },
  last_name: { type: String, required: true },
  linkedin_url: { type: String, required: false },
  profile_image: { type: String, required: true },
  slug: { type: String, required: true },
  title: { type: String, required: false },
  twitter_handle: { type: String, required: false },
  email: { type: String, required: false }
});
var collectionName = 'Author'
module.exports = mongoose.model("Author", AuthorSchema, collectionName);
