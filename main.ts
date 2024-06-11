basic.forever(function () {
    basic.showNumber(0)
    basic.pause(100)
    basic.showNumber(1)
    basic.pause(100)
    basic.showNumber(2)
    basic.pause(100)
    basic.showNumber(3)
    basic.pause(100)
    basic.showNumber(4)
    basic.pause(100)
    basic.showNumber(5)
    basic.pause(100)
    basic.showNumber(6)
    basic.pause(100)
    basic.showNumber(7)
    basic.pause(100)
    basic.showNumber(8)
    basic.pause(100)
    basic.showNumber(9)
    basic.pause(100)
    basic.showNumber(10)
    basic.pause(100)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 1681, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        . # # # .
        . . # . .
        # . # . .
        # # # . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # . .
        # # . . .
        # # # . .
        # . # . .
        # # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `)
    basic.pause(100)
})
