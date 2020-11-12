import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyChXOlxOWztgjgEA1daWH1TBMMCKoyvvro",
    authDomain: "groupuni-788dc.firebaseapp.com",
    databaseURL: "https://groupuni-788dc.firebaseio.com",
    projectId: "groupuni-788dc",
    storageBucket: "groupuni-788dc.appspot.com",
    messagingSenderId: "1038069269533",
    appId: "1:1038069269533:web:0ad0a4181cc59f507eb2f4",
    measurementId: "G-W5WY88FCET"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

  