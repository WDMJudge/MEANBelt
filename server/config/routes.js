const cont = require('./../controllers/controllers.js');

module.exports = function(app){

    app.get('/allPets', function(req, res){
        cont.allPets(req, res);
    });

    app.get('/onePet/:id', function(req, res){
        cont.onePet(req, res);
    });

    app.post('/createPet', function(req, res){
        cont.createPet(req, res);
    });

    app.put('/updatePet/:id', function(req, res){
        cont.updatePet(req, res);
    });

    app.delete('/deletePet/:id', function(req, res){
        cont.deletePet(req, res);
    });

    app.put('/like/:id', function(req, res){
        cont.like(req, res);
    });
}