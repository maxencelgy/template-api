const config = require("../config/auth.config");
const db = require("../models");
const Emotions = db.emotions;

// Get all emotions
exports.getAll = (req, res) => {
    Emotions.find()
        .then(emotions => {
            res.send(emotions);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving emotions."
            });
        });
}

// create
exports.create = (req, res) => {
    const emotions = new Emotions({
        name: req.body.name,
        description: req.body.description,
    });

    emotions.save(emotions)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Emotions."
                });
            }
        );
}

// Delete
exports.delete = (req, res) => {
    const id = req.params.id;
    Emotions.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Emotions with id=${id}. Maybe Emotions was not found!`
                });
            } else {
                res.send({
                    message: "Emotions was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Emotions with id=" + id
            });
        });
}

// Find one
exports.findOne = (req, res) => {

}