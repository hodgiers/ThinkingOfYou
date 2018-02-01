var db = require("../../models/index");

module.exports = function(app) {

    app.get("/api/toys", function(req, res) {
        // res.send("hello");

        db.toy.findAll({}).then(function(dbtoy) {
            //console.log(dbtoy);

            res.json(dbtoy);
        });
    });

    app.get("/api/toys/latest",function (req, res) {
        db.toy.findAll({
            limit: 1,
            order: [['updatedAt', 'DESC']]
        }).then(function (dbtoy) {
            res.json(dbtoy);
            console.log(dbtoy);
        });
    });


    app.get("/api/toys/user/:username",function (req, res) {
        db.toy.find(
        {
            where:{
                username: req.params.username
            }
        }).then(function (dbtoy) {
            res.json(dbtoy);
            console.log(dbtoy);
        });

    });

    app.put("/api/toys", function(req, res) {
        console.log(req.body.phone);

        db.toy.update({

            username: req.body.username,
            password: req.body.password,
            phone: req.body.phone,
            message: req.body.message,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }, {
            where: {
                username: req.body.username
            }
        }).then(function(dbtoy) {
            res.json(dbtoy);
        });
    });
    app.post("/api/toys", function(req, res) {
        console.log(req.body.phone);

        db.toy.create({

            username: req.body.username,
            password: req.body.password,
            phone: req.body.phone,
            message: req.body.message,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            creditcard: req.body.creditcard,
            streetAdress: req.body.streetAdress,
            city: req.body.city,
            zip: req.body.zip,
            state: req.body.state,
            expire: req.body.expire
        }).then(function(dbtoy) {
            res.json(dbtoy);
        });
    });
}