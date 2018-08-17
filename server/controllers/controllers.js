const Pet = require('./../models/model.js');

module.exports = {
    allPets: function(req, res){
        Pet.find({}).sort("type")
            .then(data => console.log("found the pets") || res.json(data))
            .catch(err => console.log("failed to find the pets", err) || res.json(err))
    },

    onePet: function(req, res){
        Pet.findById(req.params.id)
            .then(data => console.log("found the pet", data) || res.json(data))
            .catch(err => console.log("failed to find the pet", err) || res.json(err))
    },

    createPet: function(req, res){
        Pet.create(req.body)
            .then(data => {
                data.likes = 0;
                return data.save();
            })
            .then(data => console.log("created the pet", data) || res.json(data))
            .catch(err => console.log("failed to create the pet", err) || res.json(err))
    },

    updatePet: function(req, res){
        Pet.findByIdAndUpdate(req.params.id, { $set: {
            name: req.body.name,
            type: req.body.type,
            desc: req.body.desc,
            skillOne: req.body.skillOne,
            skillTwo: req.body.skillTwo,
            skillThree: req.body.skillThree
        }}, { runValidators: true, context: "query", new: true })
            .then(data => console.log("updated the pet", data) || res.json(data) )
            .catch(err => console.log("failed to update the pet", err) || res.json(err) );
    },

    deletePet: function(req, res){
        Pet.findByIdAndRemove(req.params.id)
            .then(data => console.log("deleted the pet", data) || res.json(data) )
            .catch(err => console.log("failed to delete the pet", err) || res.json(err) );
    },

    like: function(req, res){
        Pet.findById(req.params.id)
            .then(pet => {
                console.log("liking the pet", pet)
                pet.likes += 1
                return pet.save()
            })
            .then(pet=> res.json(pet))
            .catch(err => res.json(err))
    }
}