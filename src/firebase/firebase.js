import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { 
  firebase, 
  googleAuthProvider, 
  facebookAuthProvider, 
  database as default 
};

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// .on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   }).catch((error) => {
//     console.log('This failed', error);
//   });

// database.ref('expenses').push({
//   description: 'Coffee',
//   note: '',
//   amount: 10,
//   createdAt: 0
// });

// database.ref('notes/-L-1QvxlOnJ02MlAqSrT').update({
//   body: 'This is my note'
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Pyton'
// });

// database.ref('notes').push({
//   title: 'Some title',
//   body: 'This is my note'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//   database.ref('name').set('Vasile');
//   database.ref('job/company').set('Google');
// }, 4000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (error) => {
//     console.log('Data fetching failed.', error);
// });

// setTimeout(() => {
//   database.ref('stressLevel').set(4);
// }, 4000);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 6000);

// setTimeout(() => {
//   database.ref('stressLevel').set(8);
// }, 8000);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Failed to fecth the data.', error);
//   });

// database.ref().set({
//     name: 'Raul Muresan',
//     age: 28,
//     stressLevel: 2,
//     job: {
//         title: 'Software developer',
//         company: 'Freshbyte'
//     },
//     location: {
//         city: 'Cluj-Napoca',
//         country: 'Romania'
//     }
// }).then(() => {
//     console.log('Data 1 is saved');
// }).catch((error) => {
//     console.log('This failed.', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Pata Rat'
// });

// database.ref().update({
//     name: 'Vasile',
//     age: 49,
//     job: 'Software developer',
//     isSingle: null
// });

// database.ref('age').set(27);
// database.ref('location/city').set('Campia Turzii');

// database.ref('attributes').set({
//     height: 1.69 + 'meters',
//     weight: 70 + 'Kg'
// }).then(() => {
//     console.log('Data 2 is saved')
// }).catch((error) => {
//     console.log('This also failed.', error);
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was successfully removed');
//     }).catch((error) => {
//         console.log('This failed.', error);
//     });