// Sample data for the boxes
const boxesData = [
    {
        image: "/assets/img/popular1.jpg",
        title: " Chettinad Farm House",
        location: "Chinnathagadam, Coimbatore",
        buildingType:"Building Type1",
        tagline: "Embrace the charm of countryside living with our exquisite form houses.",
    },
    {
        image: "/assets/img/popular1.jpg",
        title: " Chettinad Farm House",
        location: "Chinnathagadam, Coimbatore",
        buildingType:"Building Type1",
        tagline: "Embrace the charm of countryside living with our exquisite form houses.",
    }, {
        image: "/assets/img/popular1.jpg",
        title: " Chettinad Farm House",
        location: "Chinnathagadam, Coimbatore",
        buildingType:"Building Type1",
        tagline: "Embrace the charm of countryside living with our exquisite form houses.",
    }, {
        image: "/assets/img/popular1.jpg",
        title: " Chettinad Farm House",
        location: "Chinnathagadam, Coimbatore",
        buildingType:"Building Type1",
        tagline: "Embrace the charm of countryside living with our exquisite form houses.",
    }, 
   
   
    // Add more box data objects as needed
];

// Function to create the HTML structure for a single box
function createBoxHTML(boxData) {
    return `
    <div class="popular__container>
            <article class="popular__card swiper-slide">
                            <img src=${boxData.image} alt="" class="popular__img">
                            <div class="popular__data">
                                <h3 class="popular__title">
                                    ${boxData.title}
                                </h3>
                                <h2 class="popular__price">
                                    <i class='bx bx-map'></i> ${boxData.location}
                                </h2>
                                <p class="popular__description">
                               ${boxData.tagline}
                             </p>
                            </div>
                        </article>
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
