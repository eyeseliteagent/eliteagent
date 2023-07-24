// Sample data for the boxes
const boxesData = [
    {
        image: "https://unsplash.com/photos/eqw1uEXxZqc",
        name: "John Doe",
        buildingType: "Building Type 1",
        location: "Location 1",
    },
    {
        image: "https://unsplash.com/photos/eqw1uEXxZqc",
        name: "Jane Smith",
        buildingType: "Building Type 2",
        location: "Location 2",
    },
    // Add more box data objects as needed
];

// Function to create the HTML structure for a single box
function createBoxHTML(boxData) {
    return `
        <div class="box">
            <div class="image-container">
                <img src="${boxData.image}" alt="Image">
            </div>
            <div class="info-container">
                <h2>${boxData.name}</h2>
                <p>Building Type: <span class="building-type">${boxData.buildingType}</span></p>
                <p>Location: <span class="location">${boxData.location}</span></p>
                <button class="quote-button">Quote</button>
            </div>
        </div>
    `;
}

// Function to populate the boxes based on the filter selections
function populateBoxes() {
    const boxContainer = document.getElementById("boxContainer");
    boxContainer.innerHTML = "";

    const locationFilter = document.getElementById("location-filter").value;
    const buildingTypeFilter = document.getElementById("building-type-filter").value;

    // Filter the boxes based on the selected options
    const filteredBoxes = boxesData.filter(boxData => {
        const locationMatch = locationFilter === "" || boxData.location === locationFilter;
        const buildingTypeMatch = buildingTypeFilter === "" || boxData.buildingType === buildingTypeFilter;
        return locationMatch && buildingTypeMatch;
    });

    // Create and add the boxes to the container
    filteredBoxes.forEach(boxData => {
        const boxHTML = createBoxHTML(boxData);
        boxContainer.innerHTML += boxHTML;
    });
}

// Function to apply filtering when the "Search" button is clicked
function filterBoxes() {
    populateBoxes();
}

// Initial population of the boxes
populateBoxes();
