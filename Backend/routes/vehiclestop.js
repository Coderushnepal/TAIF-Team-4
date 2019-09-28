var express =require('express');
var router=express.Router();
var Stop = require('../model/vehiclestop');

//example
router.route('/')
    .get((req, res, next) => {
        Stop.find({})
            .then((vehstop) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(vehstop);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Stop.create(req.body)
            .then((vstop) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(vstop);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
    
//end of an example


module.exports=router;