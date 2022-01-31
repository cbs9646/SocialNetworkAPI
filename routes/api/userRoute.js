const router = require("express").Router();

const{
    getAllUsers,
    getUsersById,
    createNewUser,
    updateUserWithId,
    removeUserById,
} = require('../../controllers/userController');

router.route("/").get(getAllUsers).post(createNewUser);
router.route("/:userId").get(getUsersById).delete(removeUserById);
router.route("/:userId").get(getUsersById).put(updateUserWithId);

const {
    addNewFriend,
    deleteFriend,
} = require("../../controllers/friendController");

router.route("/:userId/friends/:friendId").delete(deleteFriend);
router.route("/:friendId").put(addNewFriend);

module.exports = router;