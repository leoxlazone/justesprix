let nombre = Math.floor(Math.random() * 201)
let resultat = prompt("Trouvez le bon nombre")

while (resultat != nombre || resultat == "lol") {
    if (resultat > nombre) {
        alert("Le nombre est plus petit")
        resultat = prompt("Trouvez le bon nombre")
    }
    else if (resultat < nombre) {
        alert("Le nombre est plus grand")
        resultat = prompt("Trouvez le bon nombre")
    }
}

document.write("<h1>Bravo!! Le résultat était " + resultat + "</h1>")
