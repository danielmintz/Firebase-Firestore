// rendering ui for guides 
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const adminItems = document.querySelectorAll('.admin');
//rendering links to nav bar depending on logged in status

const renderLinks = (user) => {
 
  if (user) {
    //if admin show admin links
if(user.admin) {
  adminItems.forEach(item => item.style.display = 'block');
}
  // show account details
  db.collection('users').doc(user.uid).get().then(doc =>{
    const html = `
    <div>logged in as ${user.email}</div>
    <div>${doc.data().bio}</div>
    <div class="pink-text">${user.admin ? 'Admin' : ''}</div>

    `;
    accountDetails.innerHTML = html;
  })

  // toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    //hide admin links if not admin 
    adminItems.forEach(item => item.style.display = 'none');
    // hide account details
    accountDetails.innerHTML = '';
    //toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');

  }
}

// rendering guides to ui depending on logged in status
const renderGuides = (data) => {
  if(data.length){
  let html = '';
data.forEach(doc => {
//  console.log(guide.data());
const guide = doc.data();
const li = `
<li>
       <div class="collapsible-header grey lighten-4">${guide.title}</div>
       <div class="collapsible-body white">${guide.content}</div>
     </li>
`;
html += li;
})
guideList.innerHTML = html;
  } else {
    guideList.innerHTML = `<h5 class="center-align">Login to see Guides</h5>`
  }

}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });

  