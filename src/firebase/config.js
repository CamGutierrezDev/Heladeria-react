// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnvironments';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();


// console.log(process.env);
// console.log( import.meta.env );


// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
  // apiKey: "AIzaSyC9qM8LKYti4TZus0g00ISzMjudet-H2vg",
  // authDomain: "react-cursos-4368a.firebaseapp.com",
  // projectId: "react-cursos-4368a",
  // storageBucket: "react-cursos-4368a.appspot.com",
  // messagingSenderId: "35683178704",
  // appId: "1:35683178704:web:2cab2003319bbac2eba6d5"
// };

// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyDyLJugXH7YFgmHb-rMLYlxT1YwtkgYR7E",
//   authDomain: "tracker-8f49f.firebaseapp.com",
//   databaseURL: "https://tracker-8f49f.firebaseio.com",
//   projectId: "tracker-8f49f",
//   storageBucket: "tracker-8f49f.appspot.com",
//   messagingSenderId: "145943821416",
//   appId: "1:145943821416:web:12e973eaa8b630a444cfdd"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCw_ObP3pWNgF9Ffw9MewnirFQiOM8om98",
  authDomain: "camcupice.firebaseapp.com",
  projectId: "camcupice",
  storageBucket: "camcupice.firebasestorage.app",
  messagingSenderId: "671436995564",
  appId: "1:671436995564:web:3016f90a4f5daa83685ec9",
  measurementId: "G-VK8084NGPN"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );