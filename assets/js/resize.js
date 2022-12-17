<script>
function resize() {
  var leSize = $('.glslCanvas').parent().width();
  $('.glslCanvas').width(leSize);
  $('.glslCanvas').height(leSize);
}

$(window).resize(function() {
  resize();
});

$(window).bind("load", function() {
	resize();
});


</script>
