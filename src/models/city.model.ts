import mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  deletedAt: {type: Date, default: null}
}, {timestamps: true});

export default mongoose.model('City', citySchema);
