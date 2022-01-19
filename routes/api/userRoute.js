const router = require("express").Router();
const friendRoute = require("./friendRoute");

router.use('/:userId/friends', friendRoute);

const{
    getAllUsers,
    getUsersById,
    createNewUser,
    updateUserWithId,
    removeUserById,
} = require('../../controllers/userController');

router.route("/").get(getAllUsers).post(createNewUser);

router
    .route("/:userId")
    .get(getUsersById)
    .delete(removeUserById)
    .put(updateUserWithId);

    module.exports = router;