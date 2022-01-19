const { Thought } = require("./models");

module.exports = {
    getAllThoughts(req, res) {
        Thought.find()
            .then(async (thoughts) => {
                const thoughtObject = {
                    thoughtText,
                    username,
                    reactions,
                };
                return res.json(thoughtObject);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    getThoughtWithId(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-__v")
            .then(async (thought) => 
                !thought
                ? res.status(404).json({ message: "No matching thought" })
                : res.json({
                    thought,
                })
            
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err)
            
            });
    },

    newThought(req, res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .then(thought._id.push[thoughts])
        .catch((err) => res.status(500).json(err));
    },

    updateThoughtWithId(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) => 
        !thought
            ? res.status(404).json({ message: "no thought with that ID" })
            :Thought.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { users: req.params.thoughtId } },
                { new: true }
            )
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });
    },

    deleteThoughtWithId(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { thought: { thoughtId: req.params.thoughtId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
            !thought
                ? res.status(404).json({ message: " no thought matching that ID" })
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

};