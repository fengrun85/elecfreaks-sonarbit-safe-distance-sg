OLED.init(128, 64)
let distance = 0
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P1)) {
        distance = Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P16)
        OLED.writeNumNewLine(distance)
        led.plotBarGraph(
        distance,
        100
        )
        if (distance < 100) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
        basic.pause(100)
        OLED.clear()
    } else {
        OLED.clear()
        basic.clearScreen()
        basic.pause(500)
    }
})
