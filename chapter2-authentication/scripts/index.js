// rendering ui for guides 
const guideList = document.querySelector('.guides');

const renderGuides = (data) => {
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

}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });

  