const { Reaction } = require("../models");

module.exports = {
    newReaction(req, res) {
        Reaction.create(req.body)
            .then((reaction) => res.json(reaction))
            .catch((err) => res.status(500).json(err));
    },


    deleteReactionUsingId(req, res) {
        Reaction.findOneAndRemove({ _id: req.params.reactionId })
            .then((reaction) =>
            !reaction   
            ? res.status(404).json({ message: "Reaction not found" })
            :Reaction.findOneAndUpdate(
                { reactions: req.params.reactionId },
                { $pull: { reactions: req.params.reactionId } },
                { new: true }

            ))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};