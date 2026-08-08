document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if(loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            
            localStorage.setItem('gxion_user', username);
            
            window.location.href = 'dashboard.html';
        });
    }

    const userNameDisplay = document.getElementById('userNameDisplay');
    if(userNameDisplay) {
        const savedUser = localStorage.getItem('gxion_user') || 'Pengguna';
        userNameDisplay.textContent = savedUser;
    }
});