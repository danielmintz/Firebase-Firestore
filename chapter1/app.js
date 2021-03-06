
const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

//create element and render cafe
function renderCafe(doc) {

    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

  li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = "x";


   li.appendChild(name);
   li.appendChild(city);
   li.appendChild(cross)

   cafeList.appendChild(li);

   cross.addEventListener('click', (e) =>{
     e.stopPropagation();
     let id = cross.parentElement.getAttribute('data-id');
     db.collection('cafes').doc(id).delete();

   })
};

// real time listener
db.collection('cafes').orderBy('city').onSnapshot(snapshot =>{
  let changes = snapshot.docChanges();
  // console.log(changes);
  changes.forEach(change => {
    // console.log(change.doc.data())
    if(change.type == 'added'){
      renderCafe(change.doc)
    } else if (change.type == 'removed'){
      
     let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
     cafeList.removeChild(li);
    }
  })
})


//getting data
//====================

//// db.collection('cafes').where('city', '==', 'Manchester').orderBy('name').get().then((snapshot) => {
//   db.collection('cafes').orderBy('name').get().then((snapshot) => {
//     snapshot.docs.forEach(doc =>{
//         console.log(doc.data());
//         renderCafe(doc)

//     })
//  })

 //saving data - adding new documents
 form.addEventListener('submit', (e) =>{
   e.preventDefault();
   db.collection('cafes').add({
    name: form.name.value,
    city: form.city.value   
   });
   form.reset();
 })


