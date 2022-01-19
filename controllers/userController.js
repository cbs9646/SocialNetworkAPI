const { User } = require("../models");

module.exports = {
    getAllUsers(req, res) {
        User.find()
        .then(async (users) => {
            const userObject = {
                users,
            };
            return res.json(userObject);
    })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    getUsersById(req, res) {
        User.findOne({ _id: req.params.userId })
        .select("-__v")
        .then(async (user) =>
            !user
                ? res.status(404).json({ message: "ID number not found"})
                : res.json({
                    user,
                })
        )
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    createNewUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));

    },
    
    UpdateUserWithId(req, res) {
        User.findOneandUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
    }





}