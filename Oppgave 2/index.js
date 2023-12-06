// Oppgave 2

var num1 = parseFloat(document.getElementById('twentyTwenty').value);
var num2 = parseFloat(document.getElementById('twentyOne').value);
var num3 = parseFloat(document.getElementById('twentyTwo').value);

function print() {
    var largest = Math.max(num1, num2, num3);

    var year = (largest == num1) ? '2020' : ((largest == num2) ? '2021' : ((largest == num3) ? '2022' : ''));

    if (year == '2020') {
        document.getElementById("ans").innerHTML = "I 2020 var det " + largest + " projects";
    } else if (year == '2021') {
        document.getElementById("ans").innerHTML = "I 2021 var det " + largest + " projects";
    } else {
        document.getElementById("ans").innerHTML = "I 2022 var det " + largest + " projects";
    }
}


// Jeg gir opp, koden skriver bare NaN
