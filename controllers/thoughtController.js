const { User, Thought } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new thought
    createNewThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet:{ thoughts: thought._id}},
                { runValidators: true, new: true }
              );
            })
              .then((user) =>
              !user
                ? res.status(404).json({
                    message: 'Thought created, but found no user with that ID',
                  })
                : res.json('Created the thought 🎉')
            )
            .catch((err) => res.status(500).json(err));
    },
    // update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body},
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
    // Delete a thought by id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'no thought with that id' })
                    : res.json({ message: 'thought successfully deleted' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // add a reaction
        addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { "reactions": req.params.reactionsId } },
            {runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({
                        message: 'reaction created, but found no thought with that ID',
                    })
                    : res.json('thought added🎉')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

        // delete a reaction
        removeReaction(req, res) {
            Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { "reactions": req.params.reationsId } },
                { new: true }
            )
                .then((thought) =>
                    !thought
                        ? res.status(404).json({
                            message: 'Video created, but found no user with that ID',
                        })
                        : res.json('delete the reaction :(')
                )
                .catch((err) => {
                    console.log(err);
                    res.status(500).json(err);

                });
},
};
