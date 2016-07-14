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
    name: req.body.name,
    imagefront: req.body.sprites.front_default,
    imageback: req.body.sprites.back_default,
    type: req.body.types[0].type.name,
    move1: req.body.moves[0].move.name,
    move2: req.body.moves[1].move.name,
    move3: req.body.moves[2].move.name
  }, 'id').then(function(result){
    res.json({
      status: 200,
      message: 'Succesfully saved '+req.body.data.name
    });
  })
  .catch(function(err){
    console.log('errorrrrrrrrrr', err)
    res.json({
      status: 418,
      message: 'I am a teapot'
    })
  })
  // res.json({test: 'test'})
})

module.exports = router;
