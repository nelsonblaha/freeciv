function changeTerrain(biome){
  $.each($('div.tile.selected'),function(x,div){
    $.post(
      '/change_terrain_biome/',
      {id:$(div).data('id'),biome:biomes.indexOf(biome)},
      function(result){
        $(div).removeClass($(div).data('biome'));
        $(div).addClass(biomes[result]);
        $(div).data('biome',biomes[result]);
        $('p#selectedTerrainName').text(biomes[result]);
        $('div#terrainGuide div.tile').removeClass('big');
        $('div#terrainGuide div.tile.'+biomes[result]).addClass('big');
      }
    );
  });
}

$(document).ready(function(){
  // fill in terrain guide
    $.each(biomes,function(x,biome){
      $('div#terrainGuide').append("<div class='tile "+biome+"'></div>");
      $('div#terrainGuide div.tile:last-child').bind({
        click: function(){changeTerrain(biome)}
      });
    });
});