
const form = document.querySelector('.Search')  
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