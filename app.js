// jQuery v3.3.1 is supported
$("#slider").roundSlider({
	radius: 72,
	circleShape: "half-top",
  sliderType: "min-range",
	mouseScrollAction: true,
  value: 0,
	handleSize: "+5",
	min: 0,
	max: 100,
  change: function(e) {
    $("#numero").val(e.value);
    $("#rangeSlider").val(e.value);
  }
});
function atualizarTodosOsSliders(valor) {
  $("#numero").val(valor);
  $("#slider").roundSlider('setValue', valor);
  $("#rangeSlider").val(valor);
}

$("#numero").on('input', function() {
  let newValue = $(this).val();
  atualizarTodosOsSliders(newValue);
});

$("#btnMais").on('click', function() {
  let currentValue = parseInt($("#numero").val());
  if (currentValue < 100) {
    atualizarTodosOsSliders(currentValue + 1);
  }
});

$("#btnMenos").on('click', function() {
  let currentValue = parseInt($("#numero").val());
  if (currentValue > 10) {
    atualizarTodosOsSliders(currentValue - 1);
  }
});

$("#rangeSlider").on('input', function() {
  let newValue = $(this).val();
  atualizarTodosOsSliders(newValue);
});
