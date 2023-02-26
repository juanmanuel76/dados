input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    diseños_dado[randint(0, 5)].showImage(0)
})
let diseños_dado: Image[] = []
for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
}
diseños_dado = [
images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `),
images.createImage(`
    . . . . .
    . # . . .
    . . . . .
    . . . # .
    . . . . .
    `),
images.createImage(`
    . . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . .
    `),
images.createImage(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `),
images.createImage(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `),
images.createImage(`
    # . . . #
    . . . . .
    # . . . #
    . . . . .
    # . . . #
    `)
]
for (let index3 = 0; index3 <= 5; index3++) {
    diseños_dado[index3].showImage(0)
}
