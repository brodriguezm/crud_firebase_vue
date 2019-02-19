import {initializeApp} from 'firebase'

// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyC88WuJQ3WrVYIvEbJT2PexG6sJUuwh1zU",
    authDomain: "crud-vue-firebase-9057a.firebaseapp.com",
    databaseURL: "https://crud-vue-firebase-9057a.firebaseio.com",
    projectId: "crud-vue-firebase-9057a",
    storageBucket: "crud-vue-firebase-9057a.appspot.com",
    messagingSenderId: "474201554732"
  })
  
export const db = app.database()
export const dbRef = db.ref('vueStudents') 