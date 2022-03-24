const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);

router.route('/:userId').get(getThoughtById);

router.route('/:userId').post(createThought);

router.route('/:userId/:thoughtId').put(addReaction).delete(removeReaction);

router.route(':/userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;