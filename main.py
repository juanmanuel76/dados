def on_gesture_shake():
    for index in range(4):
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # . # .
                        . # # # .
                        . . . . .
        """)
        basic.show_leds("""
            # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
        """)
    diseños_dado[randint(0, 5)].show_image(0)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

diseños_dado: List[Image] = []
for index2 in range(2):
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
    """)
    basic.show_leds("""
        # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
    """)
diseños_dado = [images.create_image("""
        . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
    """),
    images.create_image("""
        . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
    """),
    images.create_image("""
        . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
    """),
    images.create_image("""
        # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
    """),
    images.create_image("""
        # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
    """),
    images.create_image("""
        # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
    """)]
for index3 in range(6):
    diseños_dado[index3].show_image(0)