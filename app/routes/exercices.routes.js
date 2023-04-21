const {authJwt} = require("../middlewares");
const controller = require("../controllers/exercices.controller");

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/exercices/all", controller.getAll);
    app.get("/api/exercices/:id", controller.findOne);
    app.post("/api/exercices/create", controller.create);
    app.delete("/api/exercices/delete/:id", controller.delete);
};
