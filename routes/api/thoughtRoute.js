const router = require("express").Router();
// const reactionRoute = require("./reactionRoute");

// router.use('/:thoughtId/reactions', reactionRoute);

const {
    getAllThoughts,
    getThoughtWithId,
    newThought,
    updateThoughtWithId,
    deleteThoughtWithId,
} = require("../../controllers/thoughtController");

const {
    newReaction,
    deleteReactionUsingId,
    deleteReaction,
} = require("../../controllers/reactionController");


router.route("/").get(getAllThoughts).post(newThought);

router 
    .route("/:thoughtId")
    .get(getThoughtWithId)
    .delete(deleteThoughtWithId)
    .put(updateThoughtWithId);

router.route("/:thoughtId/reactions").post(newReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReactionUsingId);

module.exports = router;