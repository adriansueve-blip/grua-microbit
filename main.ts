input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 5)
    basic.showArrow(ArrowNames.East)
    basic.pause(500)
    wuKong.stopAllMotor()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -5)
    basic.showArrow(ArrowNames.West)
    basic.pause(500)
    wuKong.stopAllMotor()
    basic.clearScreen()
})
basic.forever(function () {
	
})
