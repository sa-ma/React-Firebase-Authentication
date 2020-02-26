import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const Firebase = app.initializeApp(firebaseConfig);
const firebaseAuth = app.auth();
const GoogleProvider = new app.auth.GoogleAuthProvider();

export const createTraditionalUser = (email, password) =>
  firebaseAuth.createUserWithEmailAndPassword(email, password);
export const signInTraditionalUser = (email, password) =>
  firebaseAuth.signInWithEmailAndPassword(email, password);
export const signInWithGoogle = () =>
  firebaseAuth.signInWithRedirect(GoogleProvider);
export const signOutUser = () => firebaseAuth.signOut();
export const resetUserPassword = (email) =>
  firebaseAuth.sendPasswordResetEmail(email);
export const updateUserPassword = (password) =>
  firebaseAuth.updatePassword(password);

export default Firebase;
