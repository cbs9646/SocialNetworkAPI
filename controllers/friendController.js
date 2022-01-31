const { User } = require("../models");

module.exports = {
    addNewFriend(req, res) {
        const filter = { _id: req.params.userId };
        const update = { $addToSet: { friends: req.params.friendId }};
        User.findOneAndUpdate(filter, update, { runValidators: true, new: true })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    deleteFriend(req, res) {
        const filter = { _id: req.params.userId };
        const update = { $pull: {friends: req.params.friendId} };
        User.findOneAndDelete(filter, update, { runValidators: true, new: true })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

}