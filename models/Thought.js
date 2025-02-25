const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Reaction Schema (Subdocument in Thought)
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => timestamp.toISOString()
  }
});

// Create Thought Schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => timestamp.toISOString()
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
});

// Virtual for reactionCount
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Create Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
