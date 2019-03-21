
    let canvas = document.getElementById('canvas3');
    let context = canvas.getContext('2d');
    let dragging = false;
    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;
    $('#canvas3').mousedown(function(e){
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        context.beginPath();
        draw(mouseX,mouseY);
        dragging = true;
    });
    $('#canvas3').mousemove(function(e){
        if(dragging){
            let mouseX = e.offsetX;
            let mouseY = e.offsetY;
            draw(mouseX,mouseY);
        }
    });
    $('#canvas3').mouseup(function(e){
        dragging = false;
    });
    $('#canvas3').mouseleave(function(e){
        dragging = false;
    });

    function draw(x,y){
        context.lineTo(x,y);
        context.moveTo(x,y);
        context.closePath();
        context.stroke();
    }
