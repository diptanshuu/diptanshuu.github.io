import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBntKchsRTdS5iNLLVDQh5EDsWaLzuJrso",
  authDomain: "peacetemporecords-68b60.firebaseapp.com",
  databaseURL: "https://peacetemporecords-68b60-default-rtdb.firebaseio.com",
  projectId: "peacetemporecords-68b60",
  storageBucket: "peacetemporecords-68b60.appspot.com",
  messagingSenderId: "64617368361",
  appId: "1:64617368361:web:e52aa1573f4821b8468538"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById('logUser').addEventListener('click', function () {
  console.log("click");
  const email = document.getElementById('LoginEmail');
  const password = document.getElementById('LoginPassword');
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {

      const user = userCredential.user;
      const userPage = user.uid;
      // localStorage.setItem("name",`${e}`)
      console.log(user);
      if (user.displayName == null) {
          return user.updateProfile({

            displayName: prompt("Enter your Artist Name"),

          })
          .then((userRecord) => {

            location.href = `Accounts/${userPage}.html`
          })
          .catch((error) => {
            console.log('Error updating user:', error);
          });
      }

      location.href = `Accounts/${userPage}.html`
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});



