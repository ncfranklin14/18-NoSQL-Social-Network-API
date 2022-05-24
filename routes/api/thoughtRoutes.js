const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createNewThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createNewThought);

// /api/courses/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);
router.route("/:thoughtId/reactions").post(addReaction);

module.exports = router;