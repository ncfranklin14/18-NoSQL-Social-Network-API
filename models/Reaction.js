const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Schema.Types.ObjectId ()
    },
    reactionBody:{
    type: String,
    required: true,
    maxlength: 280
  },
  usename: 
  {
    type: String,
    required: true
  },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat (timestamp)
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



module.exports = reactionSchema;