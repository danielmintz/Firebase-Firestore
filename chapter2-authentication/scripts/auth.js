// real time listener to log in and logout changes

auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user.email, 'is logged in')
    } else {
        console.log('user is logged out');
}
});


//sign up 
const signupForm = document.querySelector('#signup-form');
const modals = document.querySelectorAll('.modal')

signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    // console.log(email, password)

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        console.log('user registered');
});

//closing modal (need another way if not using materialize)===:
const modal = document.querySelector('#modal-signup');
M.Modal.getInstance(modal).close();
signupForm.reset();
});


//logout
const logout = document.querySelector('#logout')
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
})
//login

const login = document.querySelector('#login-form');

login.addEventListener('submit', (e) => {
    e.preventDefault();

const email = login['login-email'].value;
const password = login['login-password'].value;

auth.signInWithEmailAndPassword(email, password).then(cred =>{

}); 
//closing modal (need another way if not using materialize)===:
const modal = document.querySelector('#modal-login');
M.Modal.getInstance(modal).close();
login.reset();
});




//You can update a user's basic profile information—the user's 
//display name and profile photo URL—with the updateProfile method. 
// For example:

// var user = firebase.auth().currentUser;

// user.updateProfile({
//   displayName: "Jane Q. User",
//   photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });

//===============
//Try this...

//cred.user.DisplayName = 