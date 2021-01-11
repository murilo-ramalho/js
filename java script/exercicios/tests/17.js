window.onload = function() {
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 130);

    const vel = 1;
    var vx = vy = 0;
    var px = py = 10;
    var tp = 30;
    var qp = 20;
    var ax = ay = 15;

    var trial = [];
    tail = 5;

    function game() {
        px += vx;
        py += vy;
        if (px < 0) {
            px = qp-1;
        }             
        if (px > qp-1) {
            px = 0;
        }   
        if (py < 0) {
            py = qp-1;
        }
        if (py>qp-1) {
            py = 0;
        }

        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, stage.width, stage.height);

        ctx.fillStyle = "red";
        ctx.fillRect(ax*tp, ay*tp, tp,tp);

        ctx.fillStyle = "gray";
        for (var i = 0; i < trial.length; i++) {
            ctx.fillRect(trial[i].x*tp, trial[i].y*tp, tp-1, tp-1);
            if (trial[i].x == px && trial[i].y == py) {
                vx = vy = 0;
                tail = 5;
            }
        }
        trial.push({x:px,y:py})
        while(trial.length> tail) {
            trial.shift();
        }
        if (ax == px && ay == py ) {
            tail++;
            ax = Math.floor(Math.random()*qp);
            ay = Math.floor(Math.random()*qp);
        }

    }
    function keyPush(event) {
        switch (event.keyCode) {
            case 37: //left 
                vx = -vel;
                vy = 0;
                break;
            case 38: //up
                vx = 0;
                vy = -vel;
                break;
            case 39: //right 
                vx = vel;
                vy = 0;
                break;
            case 40: //dowm
                vx = 0;
                vy = vel;
                break;
            default:
                break;
        }
    }
}
