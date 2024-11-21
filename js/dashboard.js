document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is logged in by verifying the token in localStorage
    const token = localStorage.getItem('authToken');
    if (!token) {
        alert('You are not logged in. Please log in.');
        window.location.href = 'login.html'; // Redirect to login if no token
    }

    // Fetch user data from the backend API
    fetch('https://etechback.onrender.com/api/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Send token in the header for authorization
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
            window.location.href = 'login.html'; // Redirect to login if there’s an error
        } else {
            // Display user data
            displayUserData(data);
        }
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
        alert('Error fetching user data.');
    });

    // Function to display user data on the dashboard
    function displayUserData(user) {
        const userName = document.getElementById('userName');
        const userEmail = document.getElementById('userEmail');
        const userAvatar = document.getElementById('userAvatar');
        
        // Fill in the user details (example: user object contains name, email, avatar URL)
        userName.textContent = user.name;
        userEmail.textContent = user.email;
        userAvatar.src = user.avatarUrl || 'assets/images/default-avatar.png'; // Placeholder avatar
        
        // You can also add more functionality, like displaying recent activities or a user's schedule
    }

    // Log out function to clear session and redirect to login page
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('authToken'); // Remove token from localStorage
        alert('You have been logged out.');
        window.location.href = 'login.html'; // Redirect to login page
    });
});
