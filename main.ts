input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() > 315 || input.compassHeading() < 45) {
        basic.showString("N")
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showString("E")
        music.playMelody("B A G A G F A C5 ", 120)
    } else if (input.compassHeading() > 135 && input.compassHeading() < 225) {
        basic.showString("S")
        music.playMelody("C5 A B G A F G E ", 120)
    }
    if (input.compassHeading() > 225 && input.compassHeading() < 315) {
        basic.showString("W")
        music.playMelody("G F G A - F E D ", 120)
    }
})
basic.forever(function () {
	
})
