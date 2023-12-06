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




// Oppgave 3

var personer = [
    {
      navn: "Runar Bålsrud",
      telefonJobb: "+4799988777",
      telefonPrivat: "+478885522",
      epost: "runar@avfallnorge.no",
      stilling: "Administrerende direktør",
      bilder: [
        {
          avatar1:
            "https://robohash.org/laudantiumetreprehenderit.png?size=300x300&set=set1",
        },
        {
          avatar2:
            "https://robohash.org/quidemvoluptasconsequatur.png?size=300x300&set=set1",
        },
        {
          bildet:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
      ],
    },

    {
      navn: "Sara Wilsgaard",
      telefonJobb: "+4777788999",
      telefonPrivat: "+478885522",
      epost: "sara.wilsgaard@avfallnorge.no",
      stilling: "Medlemskommunikasjon, bærekraft og ombruk.",
      bilder: [
        {
          avatar1:
            "https://robohash.org/temporibussitveniam.png?size=300x300&set=set1",
        },
        { avatar2: "https://robohash.org/illoipsamet.png?size=300x300&set=set1" },
        {
          bildet:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
    },
  ];

  // 3.1

  function runarAvatar() {
    var runar = personer.find(personer => personer.navn === "Runar Bålsrud")

    if (runar) {
        var divcontainer = document.createElement("div")
        divcontainer.className = 'container'
        document.body.appendChild(divcontainer)

        img = document.createElement('img')
        img.src = runar.avatar1
        divcontainer.appendChild(img)

        var divcontainer = document.createElement("div")
        divcontainer.className = 'container'
        document.body.appendChild(divcontainer)

        img = document.createElement('img')
        img.src = runar.avatar2
        divcontainer.appendChild(img)
    } 
}

runarAvatar()

//3.2 
console.log("Endre Runar sitt private tlf numer")

var runar1 = personer.find(personer => personer.navn === "Runar Bålsrud")

if (runar1) {
    runar1['telefonPrivat'] = '+47 980 83 232 ';
    console.log(runar1)
}

// 3.3

console.log("Fjerne Saras Jobb tlf")

var sara = personer.find(personer => personer.navn === "Sara Wilsgaard")

if (sara) {
    delete sara.telefonJobb
    console.log(sara)
}

//Oppgave 4



let str = "Hva er bærekraftig utvikling? En utvikling som imøtekommer dagens behov uten å ødelegge muligheten for at kommende generasjoner skal få dekket sine behov";
let searchString = "bærekraftig";
let Result = str.includes(searchString);


if (Result === true) {
    console.log("Texten har ordet <bærekraftig>, men ikke <bærekraft>")
} else {
    console.log("Texten har verken ordet <bærekraftig> eller <bærekraft>")
}