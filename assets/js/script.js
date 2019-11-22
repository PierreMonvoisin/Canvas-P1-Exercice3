$(function(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  // Voiture
  context.fillStyle = '#00A550';
  context.fillRect( 20, 70, 255, 50);

  // Bords de la voiture
  context.clearRect( 20, 70, 50, 20);
  context.clearRect( 225, 70, 50, 20);

  // Roues
  context.beginPath();
  context.lineWidth = '1';
  context.strokeStyle = '#767676';
  context.fillStyle = '#CECECE'
  context.arc( 50, 135, 15, 0, 2*Math.PI);
  context.arc( 250, 135, 15, 0, 2*Math.PI)
  context.closePath();
  context.stroke();
  context.fill()

});
