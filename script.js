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
}// Function to handle Google Sign-In
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            // This gives you a Google Access Token.
            const user = result.user;
            console.log("Logged in as:", user.displayName);
            alert("Welcome " + user.displayName + "!");
            
            // Redirect to your app dashboard
            // window.location.href = "dashboard.html";
        })
        .catch((error) => {
            console.error("Error during Google Sign-In:", error.message);
            alert("Google Sign-In failed: " + error.message);
        });
}


// Reuse the handleAuth function from previous example to connect to Firebase

