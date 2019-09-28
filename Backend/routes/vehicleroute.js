var express =require('express');
var router=express.Router();
var VehicleRoute = require('../model/vehicleroute');

//example
router.route('/')
    .get((req, res, next) => {
        VehicleRoute.find({})
        
            .then((vehroute) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(vehroute);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        VehicleRoute.create(req.body)
            .then((vroute) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(vroute);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
    router.route('/:id')
    .get((req, res, next) => {
        VehicleRoute.findById(req.params.id)
         .populate('stop')
            .then((vehroute) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(vehroute);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        const data = req.body; 
        VehicleRoute.findByIdAndUpdate(req.params.id, { $set: data }, { new: true, useFindAndModify: false })
            .then((vroute) => {                res.statusCode = 200;
                
                res.setHeader('Content-Type', 'application/json');
                res.json(vroute);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
    



module.exports=router;