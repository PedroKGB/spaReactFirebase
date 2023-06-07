import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4EXm5NqPlEnW8x2fzHNQO-jw4KOdwPVo",
  authDomain: "spa-drosas.firebaseapp.com",
  projectId: "spa-drosas",
  storageBucket: "spa-drosas.appspot.com",
  messagingSenderId: "757466373912",
  appId: "1:757466373912:web:e9f23e62334c808d6dc86d",
  measurementId: "G-T4HGVYQ0MY"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.autenticar.Googleauthprovider();

export { firebaseapp, auth, provider };