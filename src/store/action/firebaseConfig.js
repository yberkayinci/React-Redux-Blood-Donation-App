import firebase from 'firebase';

var config = {
  apiKey: "*******",
  authDomain: "*******",
  databaseURL: "*******",
  projectId: "11111111",
  storageBucket: "*********",
  messagingSenderId: "0000000000"
};
  let dbConfig = firebase.initializeApp(config);

export default dbConfig;
