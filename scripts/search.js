
const form = document.querySelector('.Search');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    searchbar()
})

function searchbar() {
    let input = document.querySelector('#Search-word').value
    let x = document.getElementsByClassName('list');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input.toLowerCase())) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}

// récupérer le form
// écouter le submit du form
// appeler la fonction search bar
// recuperer le fichier JSON
const file = "../Components/technologie.json";
// recuperer la data du fichier JSON

fetch(file)
    .then(response => response.json())
    .then((datatech) => {
        const list = document.querySelector(".list");

        //  iterer sur 
        datatech.forEach((name) => {
            //  pour chacune des  , on crée le html
            console.log(name);
            const namelist = '<li id="${card-identity}" class="list"> ${name}</li>'
            //  Recuperer le div 
            // Inserer le html de chaque   dans le html
            list.insertAdjacentHTML("beforeend", name);
            console.log(namelist)

        })
    })

