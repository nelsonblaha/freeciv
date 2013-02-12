// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

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

function getBiomeString(n){
  var biomes = new Array("glacier","desert","forest","grassland","hills","jungle","mountains","ocean","plains","swamp","tundra")
  return biomes[n]
}