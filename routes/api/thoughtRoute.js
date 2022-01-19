const router = require("express").Router();
const reactionRoute = require("./reactionRoute");

router.use('/:thoughtId/reactions', reactionRoute);

const {
    getAllThoughts,
    getThoughtWithId,
    newThought,
    updateThoughtWithId,
    deleteThoughtWithId,
} = require("../../controllers/thoughtController");

router.route("/thoughts").get(getAllThoughts).post(newThought);

router 
    .route("thoughts/:thoughtId")
    .get(getThoughtWithId)
    .delete(deleteThoughtWithId)
    .put(updateThoughtWithId);

module.exports = router;