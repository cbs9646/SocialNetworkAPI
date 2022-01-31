const { Schema, model} = require("mongoose");
const  reactionModelSchema = require("./reaction");

const thoughtModelSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            immutable: true,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionModelSchema],
     },
     {
        toJSON: {
                virtuals: true,
            },
        }
    
);

thoughtModelSchema
        .virtual("reactionCount")
        .get(function() {
            return this.reactions.length;
        });

const Thought = model("Thought", thoughtModelSchema)

module.exports = Thought;
