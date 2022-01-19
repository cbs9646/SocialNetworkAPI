const { Schema, model } = require('mongoose');
const 
const userModelSchema = new Schema(
  {
      username: {
          type: String,
          unique: true,
          required: true,
          trim: true,
      },
      email: {
          type: String,
          required: true,
          unique: true,
          trim: true,
      },
      thoughts: [
          {
              type: Schema.Types.ObjectId,
              ref: "Thought",
          },
      ],
      friends: [this],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        }
    },
    
);