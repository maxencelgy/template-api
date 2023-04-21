const config = require("../config/auth.config");
const db = require("../models");
const Sound = db.sound;

// Get all sound
exports.getAll = (req, res) => {
    Sound.find()
        .then(sound => {
            res.send(sound);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving sound."
            });
        });
}

// create
exports.create = (req, res) => {
    const sound = new Sound({
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        urlImg: req.body.urlImg,
        category: req.body.category,
        time: req.body.time,
    });

    sound.save(sound)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Sound."
                });
            }
        );
}

// Delete
exports.delete = (req, res) => {
    const id = req.params.id;
    Sound.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Sound with id=${id}. Maybe Sound was not found!`
                });
            } else {
                res.send({
                    message: "Sound was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Sound with id=" + id
            });
        });
}

// Find one
exports.findOne = (req, res) => {
    Sound.findById(req.params.id)
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found Sound with id " + req.params.id});
            else res.send(data);
        })
        .catch(err => {
                res
                    .status(500)
                    .send({message: "Error retrieving Sound with id=" + req.params.id});
            }
        );
}