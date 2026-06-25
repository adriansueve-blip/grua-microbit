input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 5)
    basic.showArrow(ArrowNames.West)
    basic.pause(1000)
    wuKong.stopAllMotor()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -5)
    basic.showArrow(ArrowNames.East)
    basic.pause(1000)
    wuKong.stopAllMotor()
    basic.clearScreen()
})
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
	
})
