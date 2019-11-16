// rendering ui for guides 
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

//rendering links to nav bar depending on logged in status

const renderLinks = (user) => {
  // toggle UI elements
  if (user) {
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
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

  