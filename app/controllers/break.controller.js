const config = require("../config/auth.config");
const db = require("../models");
const Break = db.break;


// Get all breaks
exports.getAll = (req, res) => {
    Break.find()
        .then(breaks => {
            res.send(breaks);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving breaks."
            });
        });
}

// create
exports.create = (req, res) => {
    const breaks = new Break({
        title: req.body.title,
        time: req.body.temps,
    });

    breaks.save(breaks)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Break."
                });
            }
        );
};

// Delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Break.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Break with id=${id}. Maybe Break was not found!`
                });
            } else {
                res.send({
                    message: "Break was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Break with id=" + id
            });
        });
}

// Find by ID
exports.findOne = (req, res) => {
    Break.findById(req.params.id)
        .then(data => {
                if (!data)
                    res.status(404).send({message: "Not found Break with id " + req.params.id});
                else res.send(data);
            }
        ).catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving Break with id=" + req.params.id});
        }
    );
}
