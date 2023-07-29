// Sample data for the boxes
const boxesData = [
    {
        image: "./assets/img/popular1.jpg",
        title: " Chettinad Farm House",
        location: "Chinnathagadam, Coimbatore",
        buildingType:"Building Type 1",
        tagline: "Embrace the charm of countryside living with our exquisite form houses.",
    },
    {
        image: "/eliteagent/assets/img/popular2.jpg",
        title: "Doctor Colony",
        location: "Palladam, Coimbatore",
        buildingType:"Building Type 1",
        tagline: "Discover your perfect haven at Doctor Colony. Experience the serenity of countryside living with modern amenities at your doorstep.",
    }, {
        image: "/assets/img/popular3.jpg",
        title: " Kerala Themed Farm House",
        location: "Navakkarai, Coimbatore",
        buildingType:"Building Type 1",
        tagline: "Indulge in the serene ambiance of our Kerala Themed Farm House at Navakkarai, Coimbatore, and experience luxury amidst nature.",
    }, {
        image: "/assets/img/popular4.jpg",
        title: "Krishna Avenue",
        location: "Dhayanur, Karamadai",
        buildingType:"Building Type 1",
        tagline: "Unlock Your Dream Home: Explore Plots and Homes in Prime Locations.",
    }, 
    {
        image: "/assets/img/popular5.jpg",
        title: " Sri Nila Avenue",
        location: "Ammaplayam, Tiruppur",
        buildingType:"Building Type 1",
        tagline: "Experience the serenity of Sri Nila Avenue. Enjoy a tranquil and peaceful lifestyle amidst lush greenery and serene surroundings.",
    }, {
        image: "/assets/img/popular1.jpg",
        title: " Blissful Hill",
        location: "Anaikatti, Sholayur",
        buildingType:"Building Type 1",
        tagline: "Indulge in the blissful countryside living experience at Blissful Hill's Premium Farmlands.Embrace a life of pure serenity and rejuvenation at Blissful Hill.",
    }, {
        image: "/assets/img/popular2.jpg",
        title: " RJ Garden",
        location: "Karamadai",
        buildingType:"Building Type 1",
        tagline: " Your Vision, Our Expertise: Discover Plots and Homes with Endless Potential.",
    }, {
        image: "/assets/img/popular3.jpg",
        title: "  Safari Farms ",
        location: "Velliyankadu, Karamadai",
        buildingType:"Building Type 1",
        tagline: "Embrace the charm of countryside living with our exquisite form houses.",
    }, 
    {
        image: "/assets/img/popular4.jpg",
        title: " Lushberg Luxury Villas",
        location: "Kotagiri, Towards Ooty",
        buildingType:"Building Type 1",
        tagline: " Experience luxury and comfort in our modern and elegant villas.",
    }, {
        image: "/assets/img/popular5.jpg",
        title: "Legacy Estate",
        location: "Nanjundapuram, Coimbatore",
        buildingType:"Building Type 1",
        tagline: "Invest in Your Tomorrow: Plots and Homes for the Savvy Real Estate Investor.",
    }, 
   
    // Add more box data objects as needed
];

// Function to create the HTML structure for a single box
function createBoxHTML(boxData) {
    return `
    
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
