const {authJwt} = require("../middlewares");
const controller = require("../controllers/sound.controller");

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/sounds/all", controller.getAll);
    app.get("/api/sounds/:id", controller.findOne);
    app.post("/api/sounds/create", controller.create);
    app.delete("/api/sounds/delete/:id", controller.delete);
};
