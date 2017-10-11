import firebase from 'firebase';

  // Initialize Firebase
var config = {
  apiKey: "AIzaSyDTaSQekJTuagjPSNNx151OIHBbsyO-eRc",
  authDomain: "hire-grad.firebaseapp.com",
  databaseURL: "https://hire-grad.firebaseio.com",
  projectId: "hire-grad",
  storageBucket: "hire-grad.appspot.com",
  messagingSenderId: "56482111689"
};
var fire = firebase.initializeApp(config);
export default fire;
