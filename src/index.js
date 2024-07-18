// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage,ref, getDownloadURL} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCDcv-tKQUd-hVLiCH5epMpPwjclDbLuxo",
  authDomain: "bertlomewos-cf3c5.firebaseapp.com",
  projectId: "bertlomewos-cf3c5",
  storageBucket: "bertlomewos-cf3c5.appspot.com",
  messagingSenderId: "1062294671774",
  appId: "1:1062294671774:web:351a742bdc959345f8068f",
  measurementId: "G-BB3XM7T1TP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

const storageRef = ref(storage);

const gamesRef = ref(storage, 'games')


