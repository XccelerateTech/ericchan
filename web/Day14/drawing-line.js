
$(function(){
    function drawLine (ctx,start,end){
        ctx.beginPath();
        ctx.moveTo(start[0],start[1]);
        ctx.lineTo(end[0],end[1]);
        ctx.stroke();
    }
    const canvas= document.getElementById('canvas');
    const ctx=canvas.getContext('2d');
    drawLine(ctx,[20,20],[400,400])
    drawLine(ctx, [20,400],[400,20])

})

function drawQuadraticCurve(ctx,start,cp1,end){
    ctx.setLineDash([]); // Set it to an empty array to return to solid.
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(start[0],start[1]);
    ctx.quadraticCurveTo(cp1[0],cp1[1],end[0],end[1]);
    ctx.stroke();
}

function drawLine(ctx,start,end){
    ctx.beginPath();
    ctx.moveTo(start[0],start[1]);
    ctx.lineTo(end[0],end[1]);
    ctx.stroke();
}

$(function(){
    const canvas = document.getElementById('canvas2');
    const ctx = canvas.getContext('2d');

    drawLine(ctx,[100,100],[100,400])
    drawLine(ctx,[300,100],[300,400])
    drawLine(ctx,[100,400],[300,400])
    drawQuadraticCurve(ctx,[100,100],[200,0],[300,100])
})