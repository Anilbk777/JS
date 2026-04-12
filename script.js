const users = [
    {
        name: "Aarav Sharma",
        pic: "https://i.pravatar.cc/300?img=1",
        bio: "Frontend developer who loves building smooth UI experiences."
    },
    {
        name: "Sita Gurung",
        pic: "https://i.pravatar.cc/300?img=5",
        bio: "Data analyst passionate about turning data into insights."
    },
    {
        name: "Rohan Karki",
        pic: "https://i.pravatar.cc/300?img=3",
        bio: "Backend engineer focused on scalable systems and APIs."
    },
    {
        name: "Anjali Thapa",
        pic: "https://i.pravatar.cc/300?img=9",
        bio: "UI/UX designer who creates clean and intuitive designs."
    },
    {
        name: "Kabir Singh",
        pic: "https://i.pravatar.cc/300?img=2",
        bio: "Full-stack developer exploring microservices architecture."
    },
    {
        name: "Maya Rai",
        pic: "https://i.pravatar.cc/300?img=7",
        bio: "Machine learning enthusiast working on real-world AI problems."
    },
    {
        name: "Nabin Bista",
        pic: "https://i.pravatar.cc/300?img=4",
        bio: "DevOps engineer automating infrastructure and CI/CD pipelines."
    },
    {
        name: "Priya Joshi",
        pic: "https://i.pravatar.cc/300?img=8",
        bio: "Software engineer interested in clean architecture and system design."
    }
];

// Function to display users
function displayUsers(usersToShow) {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '';

    usersToShow.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <img src="${user.pic}" alt="${user.name}" class="user-pic">
            <h3 class="user-name">${user.name}</h3>
            <p class="user-bio">${user.bio}</p>
        `;
        usersList.appendChild(userCard);
    });
}

// Function to filter users based on search input
function filterUsers(searchTerm) {
    const filtered = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    displayUsers(filtered);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayUsers(users);

    // Add search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        filterUsers(e.target.value);
    });
});