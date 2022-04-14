input.onButtonPressed(Button.A, function () {
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 50)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        # . # . .
        `)
    music.playMelody("C G C B E F C B ", 120)
})
RingbitCar.running_distance(RingbitCar.Direction_run.forward, 80)
RingbitCar.forward()
RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 360)
basic.showNumber(1)
basic.showNumber(2)
basic.showNumber(3)
basic.showString("Boo")
basic.showIcon(IconNames.Asleep)
basic.showIcon(IconNames.Happy)
soundExpression.hello.play()
basic.forever(function () {
	
})
