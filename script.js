document.addEventListener('DOMContentLoaded', () => {
    
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
    const classroomDetails = document.getElementById('classroom-details');
    const detailsName = document.getElementById('details-name');
    const detailsDescription = document.getElementById('details-description');
    const sectionButtons = document.querySelectorAll('.section-btn');
    const sections = document.querySelectorAll('.section');
    const notification = document.getElementById('notification');
    const closeBtn = document.querySelector('.close-btn');

    const SECRET_PASSWORDS = ['schoolmap123', 'anotherpassword', 'thirdpassword']; // the passwords👋👋
    let currentUsername = '';
    let highlightedClassroom = null;
    let currentSection = 'maths'; 

// the classroom locations!
    const classroomLocations = {
        maths: [
            { id: 'm1', name: 'Room E138', x: 65, y: 15, description: 'Maths classroom.' },
            { id: 'm2', name: 'Room E139', x: 15, y: 15, description: 'Maths classroom.' },
            { id: 'm3', name: 'Room E140', x: 65, y: 35, description: 'Maths classroom.' },
            { id: 'm4', name: 'Room E142', x: 65, y: 55, description: 'Maths classroom.' },
            { id: 'm5', name: 'Room E143', x: 15, y: 33, description: 'Maths classroom.' },
            { id: 'm6', name: 'Room E145', x: 15, y: 70, description: 'Maths classroom.' },
        ],
        xboxes: [
            { id: 'x1', name: 'X-201', x: 25, y: 75, description: 'Classroom in X-Boxes area.' },
            { id: 'x2', name: 'X-202', x: 25, y: 25, description: 'Classroom in X-Boxes area.' },
            { id: 'x3', name: 'X-203', x: 65, y: 25, description: 'Classroom in X-Boxes area.' },
            { id: 'x4', name: 'X-204', x: 75, y: 75, description: 'Classroom in X-Boxes area.' },
        ],
    };

    // the most important functions of all time

    function showScreen(elementToShow, elementToHide) {
        elementToShow.style.display = 'flex';
        elementToHide.style.display = 'none';
    }

    function showSection(sectionId) {
        currentSection = sectionId;
        sections.forEach(section => {
            section.style.display = section.dataset.section === sectionId ? 'block' : 'none';
        });
        sectionButtons.forEach(btn => {
            btn.classList.toggle('btn-primary', btn.dataset.section === sectionId);
            btn.classList.toggle('btn-secondary', btn.dataset.section !== sectionId);
        });
        renderMarkers(sectionId);
        highlightClassroom(null); 
    }

    function highlightClassroom(classroom, sectionId = currentSection) {
        if (highlightedClassroom) {
            const prevMarker = document.querySelector(`.marker[data-id="${highlightedClassroom.id}"]`);
            if (prevMarker) {
                prevMarker.classList.remove('highlight');
                prevMarker.classList.remove('pulse');
                const prevLabel = prevMarker.querySelector('.marker-label');
                if (prevLabel) prevLabel.remove();
            }
        }

        highlightedClassroom = classroom;

        if (classroom) {
            const marker = document.querySelector(`.marker[data-id="${classroom.id}"]`);
            if (marker) {
                marker.classList.add('highlight');
                marker.classList.remove('pulse'); 
                void marker.offsetWidth; 
                marker.classList.add('pulse'); 
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

    function renderMarkers(sectionId) {
        const markerContainer = document.getElementById(`marker-container-${sectionId}`);
        markerContainer.innerHTML = '';

        classroomLocations[sectionId].forEach(classroom => {
            const marker = document.createElement('div');
            marker.className = 'marker';
            marker.dataset.id = classroom.id;
            marker.style.left = `${classroom.x}%`;
            marker.style.top = `${classroom.y}%`;
            marker.title = classroom.name;

            marker.addEventListener('click', () => {
                highlightClassroom(classroom, sectionId);
                searchInput.value = '';
                searchErrorMessage.classList.add('hidden');
            });

            markerContainer.appendChild(marker);
        });
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        errorMessage.classList.add('hidden');

        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (username !== '' && SECRET_PASSWORDS.includes(password)) {
            currentUsername = username;
            displayUsername.textContent = currentUsername;
            showScreen(appScreen, loginScreen);
            notification.classList.remove('hidden'); 
        } else if (username === '') {
            errorMessage.textContent = 'Please enter a username.';
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.textContent = 'Incorrect password. Please try again.';
            errorMessage.classList.remove('hidden');
        }
    });

    logoutButton.addEventListener('click', () => {
        currentUsername = '';
        usernameInput.value = '';
        passwordInput.value = '';
        searchInput.value = '';
        searchErrorMessage.classList.add('hidden');
        highlightClassroom(null);
        showScreen(loginScreen, appScreen);
        notification.classList.add('hidden'); // Hides that annoying green notification when you log out
    });

    closeBtn.addEventListener('click', () => {
        notification.classList.add('hidden');
    });
    
    sectionButtons.forEach(button => {
        button.addEventListener('click', () => {
            showSection(button.dataset.section);
        });
    });

    // IMPORTANT the search button
    searchButton.addEventListener('click', () => {
        searchErrorMessage.classList.add('hidden');
        const searchTerm = searchInput.value.toLowerCase().trim();

        let found = null;
        let foundSection = null;

        // IMPORTANT allows you to search across both the X-Boxes and the Maths Corridor
        for (const sectionId in classroomLocations) {
            found = classroomLocations[sectionId].find(
                (classroom) => classroom.name.toLowerCase() === searchTerm
            );
            if (found) {
                foundSection = sectionId;
                break;
            }
        }

        if (found) {
            showSection(foundSection);
            highlightClassroom(found, foundSection);
            searchErrorMessage.classList.add('hidden');
        } else {
            highlightClassroom(null);
            searchErrorMessage.textContent = `"${searchInput.value}" not found. Please try another classroom name.`;
            searchErrorMessage.classList.remove('hidden');
        }
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
