import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
// import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB7N-qRrO0g31P-E0YlFRCzLL5XbXkfRIg',
  authDomain: 'wepartnerup-7e51b.firebaseapp.com',
  projectId: 'wepartnerup-7e51b',
  storageBucket: 'wepartnerup-7e51b.appspot.com',
  messagingSenderId: '536451458867',
  appId: '1:536451458867:web:432b9047370817a8804046',
  measurementId: 'G-9LT5F4F37J',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
// export const db = firebase.database();

export default firebase;
