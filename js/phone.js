const loadPhones=async(searchText)=>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res =await fetch(url)
    const data =await res.json()
    displayPhones(data.data)
}


// display phones
const displayPhones =(phones)=>{
const phoneContainer=document.getElementById('phone-container');
phoneContainer.textContent='';
phones = phones.slice(0,5);

// display no phones found
const errorMessage =document.getElementById('no-found-message');
if(phones.length === 0){
  errorMessage.classList.remove('d-none')
}
else{
  errorMessage.classList.add('d-none')
}


phones.forEach(phone => {
  
    
    const phoneDiv=document.createElement('div');
    phoneDiv.classList.add('col');
    const {image,phone_name
    }=phone;
    phoneDiv.innerHTML=`   <div class="card p-4">
    <img src="${image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone_name
      }</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>`
  phoneContainer.appendChild(phoneDiv)
    
});

}

document.getElementById('button-field').addEventListener('click',function(){
       const searchField=document.getElementById('search-field');
       const searchText =searchField.value ;
       loadPhones(searchText);
})


// loadPhones()