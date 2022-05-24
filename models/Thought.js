const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat (timestamp)
    },
    usename: 
        {
          type: String,
          required: true
        },
    reactions: [
        reactionSchema
      ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.legnth;
  })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;