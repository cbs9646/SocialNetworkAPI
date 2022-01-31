const { Schema, model, Types} = require('mongoose');

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
          lowercase: true,
          trim: true,
      },
      thoughts: [
          {
              type: Schema.Types.ObjectId,
              ref: "Thought",
          },
      ],
      friends: [
          {
              type: Schema.Types.ObjectId,
              ref: "User",
          },
      ],
    },
    {
        toJSON: {
            getters: true,
            
        },
        id: false,
    }
    
);

userModelSchema
    .virtual("friendCount")         
    .get(function(){
        return this.friends.length;
    });

const User = model("User", userModelSchema);

module.exports = User;