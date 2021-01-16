    /*
        function get_cssVar(varName) {
            document.querySelector(":root").style.getPropertyValue(`--${varName}`);
        }
        */

    function set_cssVar(varName, value) {
        document.querySelector(":root").style.setProperty(`--${varName}`, value);
    }

    let colors = [{
            name: "red",
            type: 1,
            hue: 0
        },
        {
            name: "yellow",
            type: 1,
            hue: 60
        },
        {
            name: "blue",
            type: 1,
            hue: 240
        },
        {
            name: "orange",
            type: 2,
            hue: 30,
            comb: ["red", "yellow"]
        },
        {
            name: "purple",
            type: 2,
            hue: 300,
            comb: ["red", "blue"]
        },
        {
            name: "green",
            type: 2,
            hue: 120,
            comb: ["yellow", "blue"]
        },
        {
            name: "vermilion",
            type: 3,
            hue: 15,
            comb: ["red", "orange"]
        },
        {
            name: "magenta",
            type: 3,
            hue: 330,
            comb: ["red", "purple"]
        },
        {
            name: "amber",
            type: 3,
            hue: 45,
            comb: ["yellow", "orange"]
        },
        {
            name: "chartreuse",
            type: 3,
            hue: 90,
            comb: ["yellow", "green"]
        },
        {
            name: "violet",
            type: 3,
            hue: 270,
            comb: ["blue", "purple"]
        },
        {
            name: "teal",
            type: 3,
            hue: 180,
            comb: ["blue", "green"]
        },
        {
            name: "carmine",
            type: 4,
            hue: 345,
            comb: ["red", "magenta"]
        },
        {
            name: "pink",
            type: 4,
            hue: 315,
            comb: ["red", "violet"]
        },
        {
            name: "lime",
            type: 4,
            hue: 75,
            comb: ["yellow", "chartreuse"]
        },
        {
            name: "electric-puprle",
            type: 4,
            hue: 285,
            comb: ["blue", "magenta"]
        },
        {
            name: "sea-green",
            type: 4,
            hue: 165,
            comb: ["blue", "chartreuse"]
        },
        {
            name: "ultramarine",
            type: 4,
            hue: 255,
            comb: ["blue", "violet"]
        },
        {
            name: "azure",
            type: 4,
            hue: 210,
            comb: ["blue", "teal"]
        },
        {
            name: "harlequin",
            type: 4,
            hue: 105,
            comb: ["orange", "teal"]
        },
        {
            name: "capri",
            type: 4,
            hue: 195,
            comb: ["green", "violet"]
        },
        {
            name: "spring-green",
            type: 4,
            hue: 195,
            comb: ["green", "teal"]
        },
        {
            name: "erin",
            type: 5,
            hue: 135,
            comb: ["green", "spring-green"]
        },
        {
            name: "navy-blue",
            type: 5,
            hue: 225,
            comb: ["blue", "azure"]
        }
    ];


    let iSelectors = []
        /* I */
    for (let color in colors) {
        for (let lightness = 90, lightIndex = 1; lightness >= 10, lightIndex < 10; lightness -= 10, lightIndex++) {
            for (let saturnation = 25, saturnationIndex = 1; saturnation <= 100, saturnationIndex <= 4; saturnation += 25, saturnationIndex++) {
                let colorName = `${colors[color].name}-${lightIndex}-${saturnationIndex}`,
                    colorValue = `hsl(${colors[color].hue}, ${saturnation}%, ${lightness}%)`;
                set_cssVar(colorName, colorValue)


                iSelectors.push(`
                bg-${colorName},
                [bg-${colorName}],
                .bg-${colorName},
                #bg-${colorName}{
                    background-color: ${colorValue};
                }
                txt-${colorName},
                [txt-${colorName}],
                .txt-${colorName},
                #txt-${colorName}{
                    color: ${colorValue};
                }
                `)

            }
        }
    }

    /* II */
    for (let color in colors) {
        for (let lightness = 90, lightIndex = 1; lightness >= 10, lightIndex < 10; lightness -= 10, lightIndex++) {
            let colorName = `${colors[color].name}-${lightIndex}`,
                colorValue = `hsl(${colors[color].hue}, 100%, ${lightness}%)`;
            set_cssVar(colorName, colorValue)


            iSelectors.push(`
                bg-${colorName},
                [bg-${colorName}],
                .bg-${colorName},
                #bg-${colorName}{
                    background-color: ${colorValue};
                }
                txt-${colorName},
                [txt-${colorName}],
                .txt-${colorName},
                #txt-${colorName}{
                    color: ${colorValue};
                }
                `)

        }
    }

    /* III */
    for (let color in colors) {
        let colorName = colors[color].name,
            colorValue = `hsl(${colors[color].hue}, 100%, 50%)`;
        set_cssVar(colorName, colorValue)


        iSelectors.push(`
                bg-${colorName},
                [bg-${colorName}],
                .bg-${colorName},
                #bg-${colorName}{
                    background-color: ${colorValue};
                }
                txt-${colorName},
                [txt-${colorName}],
                .txt-${colorName},
                #txt-${colorName}{
                    color: ${colorValue};
                }
                `)

    }


    iSelectors = iSelectors.join(" ")
    let style = document.createElement("style")
    style.innerHTML = iSelectors
    document.head.appendChild(style)