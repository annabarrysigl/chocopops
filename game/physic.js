let directions = 0;
let randomNum = Math.round(Math.random());

function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    if (directions++ % 100 == 0) {
        randomNum = Math.round(Math.random());
    }

    console.log("player2.graphic.position.x: ", player2.graphic.position.x)
    console.log("player2.graphic.position.y: ", player2.graphic.position.y)

    if (player2.graphic.position.x < WIDTH / 2 + 50
     && player2.graphic.position.y < HEIGHT / 2 + 50 && randomNum == 0) {
        player2.accelerate(moveDistance);
    } else if (player2.graphic.position.x > -WIDTH / 5 - 20
    && player2.graphic.position.y > -HEIGHT / 5 - 20
    && randomNum == 1) {
        player2.decelerate(moveDistance);
    }

    // if (player2.graphic.position.y < HEIGHT / 2 - 10 && player2.graphic.position.y && randomNum == 0) {
    //     player2.accelerate(moveDistance);
    // } else if (player2.graphic.position.y > -HEIGHT / 2 + 10 && randomNum == 1) {
    //     player2.decelerate(moveDistance);
    // }

    let randomRotate = Math.random();
    if (randomRotate < 0.33) {
        player2.turnLeft(rotateAngle);
    } else if (randomRotate > 0.66) {
        player2.turnRight(rotateAngle);
    }

    player1.move();
    player2.move();
    controls.update();
}