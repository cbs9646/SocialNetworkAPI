const router = require("express").Router();

const{
    getAllUsers,
    getUsersById,
    createNewUser,
    updateUserWithId,
    removeUserById,
} = require('../../controllers/userController');

const {
    addNewFriend,
    deleteFriend,
} = require("../../controllers/friendController");

router.route("/").get(getAllUsers).post(createNewUser);

router
    .route("/:userId")
    .get(getUsersById)
    .delete(removeUserById)
    .put(updateUserWithId);

router.route("/:userId/friends/:friendId").post(addNewFriend).delete(deleteFriend);


module.exports = router;