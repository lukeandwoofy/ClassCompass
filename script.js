document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const loginScreen = document.getElementById('login-screen');
    const appScreen = document.getElementById('app-screen');
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const displayUsername = document.getElementById('display-username');
    const logoutButton = document.getElementById('logout-button');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchErrorMessage = document.getElementById('search-error-message');
    const schoolMap = document.getElementById('school-map');
    const markerContainer = document.getElementById('marker-container');
    const classroomDetails = document.getElementById('classroom-details');
    const detailsName = document.getElementById('details-name');
    const detailsDescription = document.getElementById('details-description');

    // --- Application State ---
    const SECRET_PASSWORD = 'schoolmap123'; // The required password
    let currentUsername = ''; // Stores the username entered by the user
    let highlightedClassroom = null; // Stores the currently highlighted classroom object

    // Define your school's classroom locations.
    // IMPORTANT:
    // - Replace 'https://placehold.co/1200x675/E0F2F7/000?text=YOUR+SCHOOL+MAP+HERE'
    //   in index.html with the actual URL or path to your school map image.
    // - Adjust the 'x' and 'y' percentage values for each classroom to match its exact
    //   position on YOUR school map image.
    const classroomLocations = [
        { id: 'c1', name: 'Main Office', x: 20, y: 15, description: 'First stop for new students!' },
        { id: 'c2', name: 'Library', x: 50, y: 30, description: 'Quiet study area and book collection.' },
        { id: 'c3', name: 'Science Lab', x: 70, y: 20, description: 'Experiments and discoveries happen here.' },
        { id: 'c4', name: 'Gymnasium', x: 15, y: 60, description: 'Sports and physical education.' },
        { id: 'c5', name: 'Cafeteria', x: 40, y: 75, description: 'Lunch and snack breaks.' },
        { id: 'c6', name: 'Art Room', x: 80, y: 50, description: 'Unleash your creativity!' },
        { id: 'c7', name: 'Music Room', x: 65, y: 65, description: 'Where melodies are made.' },
        { id: 'c8', name: 'Room 101', x: 30, y: 40, description: 'General classroom.' },
        { id: 'c9', name: 'Room 102', x: 35, y: 45, description: 'General classroom.' },
        { id: 'c10', name: 'Auditorium', x: 55, y: 90, description: 'For assemblies and performances.' },
        { id: 'c11', name: 'Counseling Office', x: 25, y: 25, description: 'Guidance and support services.' },
    ];

    // --- Functions ---

    /**
     * Shows a given element and hides others based on the screen flow.
     * @param {HTMLElement} elementToShow
     * @param {HTMLElement} elementToHide
     */
    function showScreen(elementToShow, elementToHide) {
        elementToShow.style.display = 'flex'; // Or 'block' depending on container's primary layout
        elementToHide.style.display = 'none';
    }

    /**
     * Highlights a specific classroom on the map and shows its details.
     * @param {Object|null} classroom - The classroom object to highlight, or null to clear.
     */
    function highlightClassroom(classroom) {
        // Clear previous highlight
        if (highlightedClassroom) {
            const prevMarker = document.querySelector(`.marker[data-id="${highlightedClassroom.id}"]`);
            if (prevMarker) {
                prevMarker.classList.remove('highlight');
                const prevLabel = prevMarker.querySelector('.marker-label');
                if (prevLabel) prevLabel.remove(); // Remove label on deselect
            }
        }

        highlightedClassroom = classroom;

        if (classroom) {
            const marker = document.querySelector(`.marker[data-id="${classroom.id}"]`);
            if (marker) {
                marker.classList.add('highlight');
                // Add label to highlighted marker
                const label = document.createElement('span');
                label.className = 'marker-label';
                label.textContent = classroom.name;
                marker.appendChild(label);
            }

            detailsName.textContent = classroom.name;
            detailsDescription.textContent = classroom.description;
            classroomDetails.classList.remove('hidden');
        } else {
            classroomDetails.classList.add('hidden');
        }
    }

    /**
     * Renders all classroom markers on the map.
     */
    function renderMarkers() {
        // Clear existing markers first
        markerContainer.innerHTML = '';

        classroomLocations.forEach(classroom => {
            const marker = document.createElement('div');
            marker.className = 'marker';
            marker.dataset.id = classroom.id; // Store ID for easy lookup
            marker.style.left = `${classroom.x}%`;
            marker.style.top = `${classroom.y}%`;
            marker.title = classroom.name; // Tooltip

            marker.addEventListener('click', () => {
                highlightClassroom(classroom);
                // Clear search input when clicking a marker
                searchInput.value = '';
                searchErrorMessage.classList.add('hidden');
            });
            markerContainer.appendChild(marker);
        });
    }

    // --- Event Handlers ---

    // Login Form Submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        errorMessage.classList.add('hidden'); // Hide previous errors

        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (username !== '' && password === SECRET_PASSWORD) {
            currentUsername = username;
            displayUsername.textContent = currentUsername;
            showScreen(appScreen, loginScreen);
            renderMarkers(); // Render markers when app screen is shown
            highlightClassroom(null); // Clear any previous highlight
        } else if (username === '') {
            errorMessage.textContent = 'Please enter a username.';
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.textContent = 'Incorrect password. Please try again.';
            errorMessage.classList.remove('hidden');
        }
    });

    // Logout Button Click
    logoutButton.addEventListener('click', () => {
        currentUsername = '';
        usernameInput.value = ''; // Clear login form fields
        passwordInput.value = '';
        searchInput.value = ''; // Clear search field
        searchErrorMessage.classList.add('hidden');
        highlightClassroom(null); // Clear map highlight
        showScreen(loginScreen, appScreen);
    });

    // Search Button Click
    searchButton.addEventListener('click', () => {
        searchErrorMessage.classList.add('hidden'); // Hide previous errors
        const searchTerm = searchInput.value.toLowerCase().trim();

        const found = classroomLocations.find(
            (classroom) => classroom.name.toLowerCase() === searchTerm
        );

        if (found) {
            highlightClassroom(found);
            searchErrorMessage.classList.add('hidden');
        } else {
            highlightClassroom(null); // Clear highlight if not found
            searchErrorMessage.textContent = `"${searchInput.value}" not found. Please try another classroom name.`;
            searchErrorMessage.classList.remove('hidden');
        }
    });

    // Search Input Enter Key Press
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchButton.click(); // Simulate a click on the search button
        }
    });

    // --- Initial Setup (after DOM is loaded) ---
    // Ensure the login screen is visible and app screen is hidden initially.
    // This is handled by default CSS (display: none on app-screen) and JS (display:flex on login-screen)
    // No specific function call needed here unless default display is changed.
});
