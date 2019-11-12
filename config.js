
import Firebase  from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAGOBCN7IE-7OrnFWiBmeX3D6iCHwo5y4I",
    authDomain: "resto1-data.firebaseapp.com",
    databaseURL: "https://resto1-data.firebaseio.com",
    projectId: "resto1-data",
    storageBucket: "resto1-data.appspot.com",
    messagingSenderId: "119297116523",
    appId: "1:119297116523:web:6e326ff129d9fc4e1da42e"
};

//export const app = Firebase.initializeApp(firebaseConfig).database();
Firebase.initializeApp(firebaseConfig);