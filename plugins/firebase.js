import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDzrcN8fW697mE8E-h-0qFT8o6y-S3uZj8",
  authDomain: "gomihiroi.firebaseapp.com",
  databaseURL: "https://gomihiroi.firebaseio.com",
  projectId: "gomihiroi",
  storageBucket: "gomihiroi.appspot.com",
  messagingSenderId: "89163162258",
  appId: "1:89163162258:web:562f0d08178ad614f37c4b"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
