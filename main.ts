input.onButtonPressed(Button.A, function () {
    if (P1Pos > 0) {
        serial.writeLine("player.move(right)")
        P1Pos += -1
    }
    P1.move(-1)
})
input.onButtonPressed(Button.B, function () {
    if (P1Pos < 4) {
        serial.writeLine("player.move(left)")
        P1Pos += 1
    }
    P1.move(1)
})
let P1Pos = 0
let P1: game.LedSprite = null
P1 = game.createSprite(2, 4)
P1Pos = 2
