var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
function Pokemon() {
  return knex('pokemon');
};

router.post('/pokemon', function(req, res, next) {
  console.log('hitting /pokemon');
  console.log(req.body);
  Pokemon().insert({
    name: req.body.data.name,
    imagefront: req.body.data.sprites.front_default,
    imageback: req.body.data.sprites.back_default,
    type: req.body.data.types[0].type.name,
    move1: req.body.data.moves[0].move.name,
    move2: req.body.data.moves[1].move.name,
    move3: req.body.data.moves[2].move.name
  }, 'id').then(function(result){
    res.json({
      status: 200,
      message: 'Succesfully saved '+req.body
    });
  })
  .catch(function(err){
    console.log('errorrrrrrrrrr', err)
  })
})

module.exports = router;
