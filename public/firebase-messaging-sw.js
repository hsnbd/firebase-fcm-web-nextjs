// // Firebase scripts for messaging
// importScripts(
//   'https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js',
// );
// importScripts(
//   'https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js',
// );

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDBVkd1wiP-xSaB-o8cY9DErOyKLFqtz2Q',
//   authDomain: 'fn-fcm.firebaseapp.com',
//   projectId: 'fn-fcm',
//   storageBucket: 'fn-fcm.firebasestorage.app',
//   messagingSenderId: '16077086345',
//   appId: '1:16077086345:web:f9b08e4816e0ce8f4e3058',
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Retrieve Firebase Messaging instance
// const messaging = firebase.messaging();

// // Handle background messages
// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     '[firebase-messaging-sw.js] Received background message:',
//     payload,
//   );

//   const notificationTitle =
//     payload.notification?.title || 'Background Notification';
//   const notificationOptions = {
//     body: payload.notification?.body || 'You have a new message!',
//     icon: payload.notification?.icon || '/default-icon.png',
//   };

//   console.count('onBackgroundMessage');
//   console.log([notificationTitle, notificationOptions]);
//   //   self.registration.showNotification(notificationTitle, notificationOptions);
// });
