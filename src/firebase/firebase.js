import * as firebase from 'firebase'

const firebaseConfig = {
   apiKey: "AIzaSyBnhSTdCleCPkh6uDt39s6GzQsCeVeOmgE",
   authDomain: "ekondo-4a7fc.firebaseapp.com",
   databaseURL: "https://ekondo-4a7fc.firebaseio.com",
   projectId: "ekondo-4a7fc",
   storageBucket: "ekondo-4a7fc.appspot.com",
   messagingSenderId: "984146738016",
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database

export { firebase, database as default }

// apiKey: process.env.FIREBASE_API_KEY,
//    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//    databaseURL: process.env.FIREBASE_DATABASE_URL,
//    projectId: process.env.FIREBASE_PROJECT_ID,
//    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// }