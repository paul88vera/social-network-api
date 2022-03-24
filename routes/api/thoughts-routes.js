const router = require('express').Router();
const {

} = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId').put(addReaction).delete(removeThought);

router.route(':/userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;