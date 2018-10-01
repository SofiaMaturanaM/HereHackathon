import firebase from 'firebase'; 

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0qApe-0YVW1GoswGYRN4bk1Y5NqV1Bz4",
    authDomain: "here-c4ef1.firebaseapp.com",
    databaseURL: "https://here-c4ef1.firebaseio.com",
    projectId: "here-c4ef1",
    storageBucket: "here-c4ef1.appspot.com",
    messagingSenderId: "156546685994"
  };
   const firebaseIntegration = firebase.initializeApp(config);


export default firebaseIntegration; 