input.onButtonPressed(Button.A, function () {
    eboticsMIBO.forward()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Avanzar") {
        eboticsMIBO.forward()
    }
    if (receivedString == "Parar") {
        eboticsMIBO.brake()
    }
    if (receivedString == "Izq") {
        eboticsMIBO.turnleft()
    }
    if (receivedString == "Der") {
        eboticsMIBO.turnright()
    }
})
input.onButtonPressed(Button.B, function () {
    eboticsMIBO.brake()
})
radio.setGroup(1)
basic.forever(function () {
	
})
