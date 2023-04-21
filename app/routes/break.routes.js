const {authJwt} = require("../middlewares");
const controller = require("../controllers/break.controller");

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/break/all", controller.getAll);
    app.get("/api/break/:id", controller.findOne);
    app.post("/api/break/create", controller.create);
    app.delete("/api/break/delete/:id", controller.delete);
};
