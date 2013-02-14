
$(document).ready(function(){
  $('div.tile').bind({
      click: incrementTile
      // click: alertData
    });
});

function alertData(div){
  alert($(this).data('id'));
}

function incrementTile(activeDiv){
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