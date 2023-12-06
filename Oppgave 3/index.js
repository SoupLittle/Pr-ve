

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
        img.src = runar.bilder.avatar1
        divcontainer.appendChild(img)

        var divcontainer = document.createElement("div")
        divcontainer.className = 'container'
        document.body.appendChild(divcontainer)

        img = document.createElement('img')
        img.src = runar.avatar2
        divcontainer.appendChild(img)
    } 
}

// Denne får jeg ikke bildene til å funke på

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