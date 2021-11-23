//Event Listeners
document.querySelector('#animal-form').addEventListener('submit', handleSubmit)

//Event Handlers
function handleSubmit(e){
    e.preventDefault()
    console.log(e.target)
    let dogObject = {
        name:e.target.name.value,
        imageURL:e.target.image_url.value,
        breedGroup:e.target.breed_group.value,
        bredFor:e.target.bred_for.value,
        temperament:e.target.temperament.value,
    }
    renderOneDog(dogObject)
}

//DOM Render Functions
function renderOneDog(dog){
    // Build Animal
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
         <video src="${dog.imageURL}">
         <div class="content">
            <h4>${dog.name}</h4>
            <h5>${dog.breedGroup}</h5>
            <h6>${dog.bredFor}</h6>
            <h7>${dog.temperament}</h7>
        </div>
        <div class= "buttons">
            <button> Like </button>
            <button> Love </button>
        </div>
    `

//Add animal card to DOM
document.querySelector('animal-list').appendChild(card)
}

//Fetch requests
//Get fetch for all dog resources
function getAllDogs(){
    var xAPIKey = 'fe4eff12-acfa-4723-8956-d003f09be2e1'
    var url = 'https://api.thedogapi.com/v1/breeds'
    return fetch (url,{
        method: 'GET',
        headers: {
            "Authorization": xAPIKey,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(animalData => animalData.forEach(dog => renderOneDog(dog)))
    .catch(error => console.log)
}

//Initial Render
//Get data and render dogs to the DOM
function initialize(){
    getAllDogs()
    // animalData.forEach(dog => renderOneDog(dog))
}
// initialize()

//Button Responses
document.querySelector('#like').addEventListener('click', () => like('I like this dog'))
document.querySelector('#love').addEventListener('click', () => love('I love this dog'))
