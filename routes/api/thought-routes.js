const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  addReaction,
  removeReaction,
  deleteThought,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router.route("/:userId").get(getThoughtById);

router.route("/:thoughtId").delete(deleteThought).put(addReaction).delete(removeReaction);

router.route("/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
