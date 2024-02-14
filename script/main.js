// URL van het JSON-bestand
const jsonUrl = 'projects.json';

// Fetchen van het JSON-bestand
fetch(jsonUrl)
  .then(response => {
    // Controleren op fouten bij het ophalen van het bestand
    if (!response.ok) {
      throw new Error('Netwerk response was niet ok');
    }
    // JSON-gegevens omzetten naar een JavaScript object
    return response.json();
  })
  .then(data => {
    // Gegevens weergeven in de HTML
    const outputDiv = document.getElementById('output');
    data.forEach(item => {
      // Maak een nieuw element aan voor elk item in de JSON-data
      const newItem = document.createElement('div');
      newItem.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <img src="${item.image}" alt="${item.title}">
      `;
      // Voeg het nieuwe element toe aan de output
      outputDiv.appendChild(newItem);
    });
  })
  .catch(error => {
    // Afhandelen van fouten bij het fetchen van het JSON-bestand
    console.error('Fout bij het fetchen van JSON-bestand:', error);
  });

