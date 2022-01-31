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

router.route("/").get(getAllThoughts).post(newThought);
router.route("/:userId").post(newThought);
router.route("/:thoughtId").delete(deleteThoughtWithId);

const {
    newReaction,
    deleteReactionUsingId,
    
} = require("../../controllers/reactionController");

router.route("/:thoughtId/reactions").post(newReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReactionUsingId);


router 
    .route("/:thoughtId")
    .get(getThoughtWithId)
    .delete(deleteThoughtWithId)
    .put(updateThoughtWithId);

module.exports = router;