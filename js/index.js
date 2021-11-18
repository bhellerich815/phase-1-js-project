//Event Listeners
document.querySelector('#animal-form').addEventListener('submit', handleSubmit)

//Event Handlers
function handleSubmit(e){
    e.preventDefault()
    let dogObject = {
        name:e.target.name.value,
        videoURL:e.target.video_url.value,
        age:e.target.age.value,
        breed:e.target.breed.value,
        gender:e.target.gender.value,
        description:e.target.description.value
    }
    renderOneDog(dogObject)
}


//DOM Render Functions
// document.addEventListener('DOMContentLoaded', () => {
//     renderOneDog();
// })
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
                $<span class="adoptions">${dog.adoptions}</span> Adopt Dog
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
    var authKey = "KzFybG9AKp7ULb52h72QUJaF9bTQ6UxnO2f52z0BrXzW4mg7DA"
    var url = 'https://api.petfinder.com/v2'
    return fetch(url,{
        method: 'GET',
        headers: {
            "Authorization": authKey,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(animalData => animalData.forEach(dog => renderOneDog(dog)))
}

//Initial Render
//Get data and render dogs to the DOM
function initialize(){
    getAllDogs()
    animalData.forEach(dog => renderOneDog(dog))
}
initialize()

//Button Responses
document.querySelector('#like').addEventListener('click', () => like('I like this dog'))
document.querySelector('#adoptdog').addEventListener('click', () => adoptdog('I want to bring this dog home'))
