const mongoose = require("mongoose");

// An item is a checklist item such as 'Do the dishes'
// It can be assigned a description 'step 1: fill sink with warm water and soap. step2...etc'

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Item must have a name"],
    minlength: [3, "Item name must be at least 3 characters"],
  },
  description: { 
    type: String,
    required: false,
    maxlength: [300, "Description must be at most 300 characters"],
  },
  isChecked: {
    type: Boolean,
    required: [true, "Instance must be labled checked or not"],
    default: false,
  },
  notes: {
    type: String,
    required: false,
    maxlength: [300, "Max note length is 300 characters"],
  },
})

const InstanceSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    required: [true, "Checklist needs a start time"],
    default: Date.now,
  },
  isTemplate: {
    type: Boolean,
    required: [true, "Checklist must be labled as a template or not"],
    default: true,
  },
  isComplete: {
    type: Boolean,
    required: [true, "Checklist must be labled as complete or not"],
    default: false,
  },
  items: {
    type: [ItemSchema],
    required: false,
  }
});

const ChecklistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Checklist must have a name"],
    minlength: [3, "Checklist name must be at least 3 characters"],
  },
  instances: {
    type: [InstanceSchema],
    default: [],
  },
});


module.exports = mongoose.model("Checklist", ChecklistSchema);
