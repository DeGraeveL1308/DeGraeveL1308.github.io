// URL van het JSON-bestand dat je wilt ophalen
const url = "projects.json";

// Een fetch-verzoek maken om het JSON-bestand op te halen
fetch(url)
  .then(response => {
    // Controleer of het verzoek succesvol is
    if (!response.ok) {
      throw new Error('Netwerk respons was niet ok');
    }
    // Als het verzoek succesvol is, converteer de respons naar JSON
    return response.json();
  })
  .then(data => {
    // Hier kun je de JSON-gegevens gebruiken
    console.log(data);
  })
  .catch(error => {
    // Als er een fout optreedt tijdens het ophalen of verwerken van de JSON
    console.error('Fout bij het ophalen van het JSON-bestand:', error);
  });

  function toonJSON(data) {
    const container = document.getElementById('json-container');
    // Maak een nieuwe <pre> element aan om de JSON-gegevens weer te geven
    const preElement = document.createElement('pre');
    // Converteer de JSON-gegevens naar een leesbare string en plaats deze in het <pre> element
    preElement.textContent = JSON.stringify(data, null, 2);
    // Voeg het <pre> element toe aan de container in de HTML
    container.appendChild(preElement);
  }
