const router = require ('express').Router();

const {
    newReaction,
    deleteReactionUsingId,
} = require('../../controllers/reactionController');

router.route('/:thoughtId/reactions').post(newReaction);

router.route('/thoughtId/reactions').delete(deleteReactionUsingId);

module.exports = router;