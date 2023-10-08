import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBBcIDGovDJ97eMoaxTvBaqupSK1BPlzlc",
    authDomain: "user-portal-6daeb.firebaseapp.com",
    projectId: "user-portal-6daeb",
    storageBucket: "user-portal-6daeb.appspot.com",
    messagingSenderId: "295547999517",
    appId: "1:295547999517:web:501aa13125225bda3cfdf4",
    databaseURL: "https://user-portal-6daeb-default-rtdb.firebaseio.com/",

  };
  
  const config = initializeApp(firebaseConfig);
  export { config };
  