function showCoordinates() {
    var citySelect = document.getElementById("cities");
    var selectedCity = citySelect.options[citySelect.selectedIndex].text;

    var coordinates = {
        "Karachi": { latitude: 24.8607, longitude: 67.0011 },
        "Lahore": { latitude: 31.5497, longitude: 74.3436 },
        "Islamabad": { latitude: 33.6844, longitude: 73.0479 },
        "Rawalpindi": { latitude: 33.5651, longitude: 73.0169 },
        "Faisalabad": { latitude: 31.4187, longitude: 73.0791 },
        "Multan": { latitude: 30.1575, longitude: 71.5249 },
        "Gujranwala": { latitude: 32.1617, longitude: 74.1883 },
        "Hyderabad": { latitude: 25.3969, longitude: 68.3772 },
        "Peshawar": { latitude: 34.0151, longitude: 71.5249 },
        "Quetta": { latitude: 30.1798, longitude: 66.9750 }
    };

    var coordinatesDiv = document.getElementById("coordinates");

    if (coordinates[selectedCity]) {
        var latitude = coordinates[selectedCity].latitude;
        var longitude = coordinates[selectedCity].longitude;
        document.getElementById("selectedCity").textContent = selectedCity;
        document.getElementById("latitude").textContent = latitude;
        document.getElementById("longitude").textContent = longitude;
        coordinatesDiv.style.display = "block"; // Show coordinates div
    } else {
        coordinatesDiv.style.display = "none"; // Hide coordinates div if no coordinates found
    }
}