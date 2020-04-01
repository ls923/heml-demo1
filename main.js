var div1 = document.createElement('div');
div1.className = 'demo';

document.body.appendChild(div1);

var flag = false;
var lastX;
var lastY;

div1.onmousedown = function (e) {
    console.log("Start:");
    console.log(e.clientX, e.clientY);
    lastX = e.clientX;
    lastY = e.clientY;
    flag = true;
}


document.body.onmousemove = function (e) {
    if (flag === true) {
        console.log(e.clientX, e.clientY)
        var finX = e.clientX - lastX;
        var finY = e.clientY - lastY;
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        div1.style.top = top + finY + 'px';
        div1.style.left = left + finX + 'px';
        lastX = e.clientX;
        lastY = e.clientY;
    }

}

div1.onmouseup = function () {
    flag = false;
}