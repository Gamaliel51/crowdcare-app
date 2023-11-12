import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in.
    const uid = user.uid;
    console.log('User is signed in with UID:', uid);
  } else {
    // User is signed out.
    console.log('User is signed out');
  }
});