app.filter('auto', function() {
  return function(pokemon){
    return pokemon.split('_').map(function(el){
      return el[0]
    })
    .join('')
  }
});
