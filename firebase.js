// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCprWcN3PuOgsNLZOktUURiTIZ79c7OYSE",
    authDomain: "halla-f6ee1.firebaseapp.com",
    databaseURL: "https://halla-f6ee1-default-rtdb.firebaseio.com",
    projectId: "halla-f6ee1",
    storageBucket: "halla-f6ee1.appspot.com",
    messagingSenderId: "657162355314",
    appId: "1:657162355314:web:9392a3cab09614fa0738eb",
    measurementId: "G-3RQ0BFEMX1"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const database = firebase.database()

function add_name()
{
    // Get all our input
    let name = document.getElementById('name').value
    let status = document.getElementById('status').value
    if (name == "")
    {
        alert("השם חייב להיות מלא")
    }
    else{
        var name_data = {
            name : name,
            status : status,
            }
            database.ref('names').push(name_data)
            .then(function() {
                window.location.href = "thanks.html";
            })
            .catch(function(error) {
                console.error(error);
                alert(error.message);
            });
    }
}
