//DOM Render Functions
function renderOneDog(dog){

    // Build Animal
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
         <video src="${dog.videoUrl}">
         <div class="content">
            <h4>${dog.name}</h4>
            <h5>${dog.age}</h5>
            <h6>${dog.breed}</h6>
            <h7>${dog.gender}</h7>
            <p>
                $<span class="donation-count">${dog.donations}</span> Donated
            <p>
            <p>${dog.description}</p>
        </div>
        <div class="buttons">
            <button> Like </button>
            <button> Adoot Dog </button>
        </div>
    `

//Add animal card to DOM
document.querySelector('dog-list').appendChild(card)
}

//Fetch requests
//Get fetch for all dog resources
function getAllDogs(){
    fetch()
    .then(res => res.json())
    .then(animalData => animalData.forEach(dog => renderOneDog(dog)))
}

//Initial Render
//Get data and render dogs to the DOM
function initialize(){
    animalData.forEach(dog => renderOneDog(dog))
}
initialize()