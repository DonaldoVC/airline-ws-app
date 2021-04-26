import mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  citySource: {type: 'ObjectId', ref: 'City'},
  cityDestiny: {type: 'ObjectId', ref: 'City'},
  dateSource: {type: Date, default: null},
  dateDestiny: {type: Date, default: null},
  price: Number,
  availability: Number,
  deletedAt: {type: Date, default: null}
}, {timestamps: true});

export default mongoose.model('Flight', flightSchema);
