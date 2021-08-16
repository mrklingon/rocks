function mkAst3 () {
    ast3 = game.createSprite(randint(0, 4), randint(0, 4))
    ast3.turn(Direction.Right, randint(0, 359))
}
function mkAst () {
    asteroid = game.createSprite(randint(0, 4), randint(0, 4))
    asteroid.turn(Direction.Right, randint(0, 359))
}
input.onButtonPressed(Button.A, function () {
    ship.turn(Direction.Left, 45)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        ship.move(1)
        ship.ifOnEdgeBounce()
        basic.pause(100)
    }
    game.setScore(scor)
})
input.onButtonPressed(Button.B, function () {
    ship.turn(Direction.Right, 45)
})
function mkAst2 () {
    ast2 = game.createSprite(randint(0, 4), randint(0, 4))
    ast2.turn(Direction.Right, randint(0, 359))
}
let ast2: game.LedSprite = null
let scor = 0
let asteroid: game.LedSprite = null
let ast3: game.LedSprite = null
let ship: game.LedSprite = null
images.createBigImage(`
    . . . # # # . # . .
    . . # # . . . . . .
    . # . # . . . # # .
    . . # # . . . . . .
    . . . # # # . . # #
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . # # . # . .
    . . . . . . . . . .
    . . # . . # . . . .
    . . . . . . . . . .
    . . . # # . . . . .
    `).scrollImage(1, 200)
music.playMelody("G B A G C5 B A B ", 139)
mkAst()
mkAst2()
mkAst3()
game.setLife(3)
ship = game.createSprite(0, 0)
basic.forever(function () {
    basic.pause(300)
    asteroid.move(1)
    asteroid.ifOnEdgeBounce()
    if (ship.isTouching(asteroid)) {
        game.removeLife(1)
    }
    ast2.move(1)
    ast2.ifOnEdgeBounce()
    if (ship.isTouching(ast2)) {
        game.removeLife(1)
    }
    ast3.move(1)
    ast3.ifOnEdgeBounce()
    if (ship.isTouching(ast2)) {
        game.removeLife(1)
    }
    scor += 1
})
