
// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADrIA-IrZnp19Jx-CC6jzx7Zn6uwWH_W8",
    authDomain: "apex-website-654b7.firebaseapp.com",
    projectId: "apex-website-654b7",
    storageBucket: "apex-website-654b7.firebasestorage.app",
    messagingSenderId: "431491312869",
    appId: "1:431491312869:web:1effcbedd42e05e2e7b80c",
    measurementId: "G-T87GRRT590"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // تأكد أن هذا السطر موجود في الأعلى وليس داخل دالة

// --- SIGN UP ---
const signupBtn = document.getElementById('btn-signup');
signupBtn.addEventListener('click', () => {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;

    const signupError = document.getElementById("signup-error");
    signupError.textContent = "";

    if (password !== confirmPassword) {
        signupError.textContent = "⚠️ كلمة المرور غير متطابقة";
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(error => {
            signupError.textContent = "⚠️ " + error.message;
        });
});

// --- LOGIN ---
const loginBtn = document.getElementById('btn-login');
loginBtn.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const loginError = document.getElementById("login-error");
    loginError.textContent = "";

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(error => {
            loginError.textContent = "⚠️ " + error.message;
        });
});

// --- GOOGLE LOGIN ---
const googleProvider = new GoogleAuthProvider();
const googleBtn = document.getElementById('google-login');

googleBtn.addEventListener('click', () => {
    signInWithPopup(auth, googleProvider)
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(error => {
            alert("⚠️ " + error.message);
        });
});