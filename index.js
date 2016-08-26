var mousePressed = false;
var lastX, lastY;
var ctx;
window.onload= function() {
    InitThis();
    initq();
};
function initq() {
    var qr = new QRious({
          element: document.getElementById('qriouscontainer'),
          value: 'https://github.com/renky1025'
        });
        qr.size = 300;
};
function InitThis() {
    var node = document.getElementById('myCanvas');
    ctx = node.getContext("2d");

    var onmousedownhandle = function (e) {
        mousePressed = true;
        var dx = e.pageX - node.offsetLeft,
        dy = e.pageY-node.offsetTop;
        Draw(dx, dy, false);
    };
    var onmousemovehandle = function (e) {
        if (mousePressed) {
            var dx = e.pageX - node.offsetLeft,
            dy = e.pageY-node.offsetTop;
            Draw(dx, dy, true);
        }
    };
    var onmouseuphandle = function (e) {
        mousePressed = false;
    };
    var onmouseleavehandle = function (e) {
        mousePressed = false;
    };

    node.addEventListener("mousedown", onmousedownhandle);
    node.addEventListener("mousemove", onmousemovehandle);
    node.addEventListener("mouseup", onmouseuphandle);
    node.addEventListener("mouseleave", onmouseleavehandle);
}
 
function Draw(x, y, isDown) {
    if (isDown) {
        var strokestyle = document.getElementById('selColor').value;
        var linewidth = document.getElementById('selWidth').value;
        ctx.beginPath();
        ctx.strokeStyle = strokestyle;
        ctx.lineWidth = linewidth;
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}
     
function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
} 