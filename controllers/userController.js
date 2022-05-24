const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((course) =>
            !course
              ? res.status(404).json({ message: 'No user with this id!' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
    // Delete a user by id
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'no user with that id' })
                    : res.json({ message: 'Student successfully deleted' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // add a friend
   addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { "friends": req.params.friendID } },
            { new: true })
            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'friend created, but found no user with that ID',
                    })
                    : res.json('friend added🎉')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

        // delete a friend
        removeFriend(req, res) {
            User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { "friends": req.params.friendID } },
                { new: true }
            )
                .then((user) =>
                    !user
                        ? res.status(404).json({
                            message: 'Video created, but found no user with that ID',
                        })
                        : res.json('delete the friend :(')
                )
                .catch((err) => {
                    console.log(err);
                    res.status(500).json(err);

                });
},
};
