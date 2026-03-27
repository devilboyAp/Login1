let isLogin = true;

function toggleMode() {
    isLogin = !isLogin;
    
    const title = document.querySelector('h1');
    const subtitle = document.getElementById('form-subtitle');
    const nameGroup = document.getElementById('name-group');
    const mainBtn = document.getElementById('main-btn');
    const toggleText = document.getElementById('toggle-text');

    if (isLogin) {
        title.innerText = "Deskdoc";
        subtitle.innerText = "Welcome back! Please enter your details.";
        nameGroup.style.display = "none";
        mainBtn.innerText = "Sign In";
        toggleText.innerHTML = `Don't have an account? <span onclick="toggleMode()">Create one</span>`;
    } else {
        title.innerText = "Join Us";
        subtitle.innerText = "Start managing your health today.";
        nameGroup.style.display = "block";
        mainBtn.innerText = "Create Account";
        toggleText.innerHTML = `Already have an account? <span onclick="toggleMode()">Sign In</span>`;
    }
}

// Reuse the handleAuth function from previous example to connect to Firebase

