const firebaseConfig = {
    apiKey: "AIzaSyDVBJbBtvxOMe7jPT8-4Z1CJFvNELGQnPM",
    authDomain: "kwitter-homework-5f461.firebaseapp.com",
    databaseURL: "https://kwitter-homework-5f461-default-rtdb.firebaseio.com",
    projectId: "kwitter-homework-5f461",
    storageBucket: "kwitter-homework-5f461.appspot.com",
    messagingSenderId: "326132748928",
    appId: "1:326132748928:web:5dcce6d50c5d0f11ad0c65",
    measurementId: "G-FR98CQL0V9"
  };
  
  // Initialize Firebase
 
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome "+ user_name +"!";

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      
      window.location="index.html";
}


