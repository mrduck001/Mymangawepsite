// Import the necessary functions from Firebase SDK
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Get Firebase Authentication instance
const auth = getAuth();

// Function to register user
function registerUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User registered:', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

// Function to sign in user
function signInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User signed in:', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

// Firebase SDK imports
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Firebase configuration (أدخل بياناتك هنا)
const firebaseConfig = {
  apiKey: "AIzaSyAvzvHdIEEk58K9DtaNVCpf7tnZwy7SA5E",
  authDomain: "manga-verse-5618c.firebaseapp.com",
  projectId: "manga-verse-5618c",
  storageBucket: "manga-verse-5618c.firebasestorage.app",
  messagingSenderId: "560321632244",
  appId: "1:560321632244:web:a2bce6e4ab664499ca8ba1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Register user function
function registerUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('User registered: ' + user.email);
    })
    .catch((error) => {
      alert('Error: ' + error.message);
    });
}

// Sign-in user function
function signInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('User signed in: ' + user.email);
    })
    .catch((error) => {
      alert('Error: ' + error.message);
    });
}

// Handle form submission for login
document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signInUser(email, password);
});
