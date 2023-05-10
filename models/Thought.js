const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 250
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            dafault: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MM DD, YYYY [at] hh:mm a'),
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)

