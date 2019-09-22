let grades =  359;
let amountColors = 5;

function randomPalette() {
	let randomValue = Math.floor(Math.random() * 360);
    let colors = [];
	
    for (let index = 0; index < amountColors; index++) {
        let hue = randomValue / grades;
        let rgb = hslToRgb(hue, 0.5, 0.5);
        colors.push(rgbToHex(rgb[0], rgb[1], rgb[2]));
        randomValue = diferentialSum(randomValue);
    }
	
    generateRules(colors);
}

function rgbToHex(r, g, b) {
    return "#" +
        ("0" + parseInt(r, 10).toString(16)).slice(-2) +
        ("0" + parseInt(g, 10).toString(16)).slice(-2) +
        ("0" + parseInt(b, 10).toString(16)).slice(-2);
}

function diferentialSum(scale) {
    let tone = (360 / amountColors);

    if ((scale + tone) > grades) {
        scale = ((scale + tone) - grades);
    } else {
        scale = scale + tone;
    }
    return scale;
}


function generateRules(colors) {
    var reglas = [];
    reglas.push(".website-background{ color: " + colors[0] + ";}");
    reglas.push(".element-text{ color: " + colors[1] + ";}");
    reglas.push(".element-border{ border-color:" + colors[2] + ";}");
    reglas.push(".element-background{ background-color: " + colors[3] + ";}");
    reglas.push(".header{ color: " + colors[4] + ";}");
    $("#css-rules").val(reglas.join("\n"));

    $("#color1").css("background-color", colors[0]);
    $("#color2").css("background-color", colors[1]);
    $("#color3").css("background-color", colors[2]);
    $("#color4").css("background-color", colors[3]);
    $("#color5").css("background-color", colors[4]);
}

function cleanPalette() {
    let hexWhite = "#FFFFFF";
    var reglas = [];
    reglas.push(".website-background{ color: " + hexWhite + ";}");
    reglas.push(".element-text{ color: " + hexWhite + ";}");
    reglas.push(".element-border{ border-color:" + hexWhite + ";}");
    reglas.push(".element-background{ background-color: " + hexWhite + ";}");
    reglas.push(".header{ color: " + hexWhite + ";}");
    $("#css-rules").val(reglas.join("\n"));

	$("#color1").css("background-color", hexWhite);
    $("#color2").css("background-color", hexWhite);
    $("#color3").css("background-color", hexWhite);
    $("#color4").css("background-color", hexWhite);
    $("#color5").css("background-color", hexWhite);
}