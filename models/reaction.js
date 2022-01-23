const { Schema, Types } = require('mongoose');

const reactionModelSchema = new Schema (

    {
        body: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

module.exports = reactionModelSchema;




