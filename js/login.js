document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('https://etechback.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            alert('Login successful!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else if (data.error) {
            alert(data.error);
        }
    })
    .catch(error => {
        alert('Error: ' + error);
    });
});
