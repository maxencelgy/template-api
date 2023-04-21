const config = require("../config/auth.config");
const db = require("../models");
const Exercices = db.exercices;

// Get all exercices
exports.getAll = (req, res) => {
    Exercices.find()
        .then(exercices => {
            res.send(exercices);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving exercices."
            });
        });
}


// create
exports.create = (req, res) => {
    const exercices = new Exercices({
        emotions_id: req.body.emotions_id,
        sound_id: req.body.sound_id,
        description: req.body.description,
        title: req.body.title,
        time: req.body.temps,
    });

    exercices.save(exercices)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Exercices."
                });
            }
        );
}

// Delete
exports.delete = (req, res) => {
    const id = req.params.id;
    Exercices.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Exercices with id=${id}. Maybe Exercices was not found!`
                });
            } else {
                res.send({
                    message: "Exercices was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Exercices with id=" + id
            });
        });
}

// Find one
exports.findOne = (req, res) => {
    Exercices.findById(req.params.id)
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found Exercices with id " + req.params.id});
            else res.send(data);
        })
        .catch(err => {
                res.status(500).send({message: "Error retrieving Exercices with id=" + req.params.id});
            }
        );
}