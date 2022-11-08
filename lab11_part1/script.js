var variable = document.getElementById("MyCanvas");
var ctx = variable.getContext('2d');

ctx.strokeRect(20, 20, 256, 256);
ctx.fillStyle = '#AF5200';
ctx.fillRect(20, 20, 256, 256);

for (i=0; i<8; i+=2){
	for (j=0; j<8; j+=2){
		ctx.clearRect(20+i*32, 20+j*32, 32, 32);
		ctx.clearRect(20+(i+1)*32, 20+(j+1)*32, 32, 32);
	}
}