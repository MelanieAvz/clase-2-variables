input.onButtonPressed(Button.A, function () {
    Pasos = 0
    Vuelta_izquierda = 0
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    Vuelta_izquierda += 1
    basic.showNumber(Vuelta_izquierda)
})
input.onButtonPressed(Button.AB, function () {
    Pasos = 0
    Vuelta_derecha = 0
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Pasos += 1
    basic.showNumber(Pasos)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
    Vuelta_derecha += 1
    basic.showNumber(Vuelta_derecha)
})
let Vuelta_izquierda = 0
let Vuelta_derecha = 0
let Pasos = 0
Pasos = 0
Vuelta_derecha = 0
