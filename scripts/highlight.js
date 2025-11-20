
// recuperer le fichier JSON
const file = "../Components/technologie.json";
// recuperer la data du fichier JSON

fetch(file)
    .then(response => response.json())
    .then((datatech) => {
        const list = document.querySelector(".list");
        list.innerHTML = "";
        //  iterer sur 
        datatech.forEach((name) => {
            //  pour chacune des  , on crée le html
            console.log(name)
            const namelist = '<li class="${card-identity}"> ${name}</li>'
            //  Recuperer le div 
            // Inserer le html de chaque   dans le html
            list.insertAdjacentHTML("beforeend", name);

        })
    })











