function incrementTerrain(activeDiv){
  var biome = $(this).data('biome');
  var id = $(this).data('id');
  $.getJSON(
      "/increment_terrain.json",
      { id:$(this).data('id') },
      function(result){
        $('div#tile'+id).removeClass(biome);
        $('div#tile'+id).addClass(getBiomeString(result));
        $('div#tile'+id).data('biome',getBiomeString(result));
        $('p#biomeGuide').text(getBiomeString(result));
      }
    );
}
