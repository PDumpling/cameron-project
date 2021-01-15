let temperature_F = 0
let temperature_C = 0
let temperature = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    temperature = pins.analogReadPin(AnalogPin.P2)
    temperature_C = (0 - temperature % 5) / 5
    temperature_F = input.temperature() * (9 / 5) + 32
    basic.showNumber(temperature_F)
})
