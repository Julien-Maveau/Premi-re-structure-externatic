const file = "Components/technologie.json";
const technoLines = document.querySelector(".techno-lines");
const searchBar = document.getElementById("Search-word");

let technologies = [];

// Fonction pour charger les technologies à partir du fichier JSON
fetch(file)
  .then(response => response.json())
  .then((data) => {
    technologies = data; // On stocke les données des technologies
    displayTechnologies(technologies); // Afficher toutes les technologies au début

     // Ajouter un écouteur d'événement pour filtrer les résultats en temps réel
     // On parcourt chaque technologie pour ne garder que celles qui correspondent à la recherche.
    // si son nom contient la recherche
    // OU si sa ligne (description, catégorie, etc.) contient la recherche
    // on affiche ensuite les technologies filtrés et non tout.
    searchBar.addEventListener("keyup", () => {
      const searchQuery = searchBar.value.toLowerCase();

      const filteredTechnologies = technologies.filter(techno => {
        return techno.name.toLowerCase().includes(searchQuery) || techno.line.toLowerCase().includes(searchQuery) || techno.tags.some(tag => tag.toLowerCase().includes(searchQuery));
      });
      displayTechnologies(filteredTechnologies);

    });
  })
// Fonction pour afficher les technologies sur la page
function displayTechnologies(data) {
  technoLines.innerHTML = ''; // On vide la liste avant de l'actualiser
  data.forEach((techno) => {
    const techItem = document.createElement("div");
    //On fait une condition if pour séparer les technologies selon leurs branches lines pour donner des classes différentes.
    if (techno.line === "Frontend") {
      techItem.classList.add("front-tech-item")

    } if (techno.line === "Backend") {
      techItem.classList.add("back-tech-item")

    }
//ajouter les éléments avec leur nouvelles classes
    techItem.innerHTML = `
      <h3>${techno.name}</h3>
      <p>${techno.line}</p>
      <ul class="tags">
        ${techno.tags.map(tag => `<li>${tag}</li>`).join('')}
      </ul>
      <div class="description" style="display:none;">
    ${techno.description || "Aucune description disponible."}
  </div>
    `;

    // Ajouter un événement de clic pour afficher ou cacher les tags
    techItem.addEventListener("click", () => {
    // On récupère la liste des tags à l'intérieur de la carte
      const tagsList = techItem.querySelector(".tags");
    // On récupère la description à l'intérieur de la carte
      const description = techItem.querySelector(".description");
    
      const nowVisible = tagsList.style.display === "none" || tagsList.style.display === ""
    ? "block" //les tags vont etre affichés
    : "none"; // Les tags vont etre cachés

   tagsList.style.display = nowVisible;

  // Ensuite on affiche ou cache la description selon l'état réel
  description.style.display = nowVisible === "block" ? "block" : "none";
    });

    technoLines.appendChild(techItem);
  });
}

