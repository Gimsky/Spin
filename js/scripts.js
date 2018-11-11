var canv = document.getElementById("canvas"),
    ctx    = canv.getContext("2d"),
    w = 600,
    h = 600,
    R = 180
    r = 100,
    d = 70,
    teta = 0;
var timer;  
var t = 4;
var myColor = 'lime';

document.getElementById("Rvalue").textContent = 'R: ' + R;
document.getElementById("rvalue").textContent = 'r: ' + r;
document.getElementById("dvalue").textContent = 'd: ' + d;
document.getElementById("tvalue").textContent = 't: ' + t;
document.getElementById("t").value = t;

document.getElementById("color").onchange = function(){
  myColor = this.value;
};

document.getElementById("R").oninput = function(){
  ctx.clearRect(0,0,w,h);
  R = this.value;
  document.getElementById("Rvalue").textContent = 'R: ' + R;
};


document.getElementById("r").oninput = function(){
  ctx.clearRect(0,0,w,h);
  r = this.value;
  document.getElementById("rvalue").textContent = 'r: ' + r;
};

document.getElementById("d").oninput = function(){
  ctx.clearRect(0,0,w,h);
  d = this.value;
  document.getElementById("dvalue").textContent = 'd: ' + d;
};

document.getElementById("t").oninput = function(){
  ctx.clearRect(0,0,w,h);
  t = this.value;
  document.getElementById("tvalue").textContent = 't: ' + t;
};


canv.height = h;
canv.width = w;
function spiro(){
  var x = (R - r) * Math.cos(teta) + d * Math.cos( (R - r) * teta/r );
  var y = (R - r) * Math.sin(teta) - d * Math.sin( (R - r) * teta/r );
  teta += 0.1;
  ctx.fillStyle = myColor;
  ctx.beginPath();
  ctx.arc(300+x, 300+y, 4, 0, Math.PI * 2);
  ctx.fill();
  timer = setTimeout(spiro, t);
}

spiro();