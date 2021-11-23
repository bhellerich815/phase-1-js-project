//Event Listeners
document.querySelector('#animal-form').addEventListener('submit', handleSubmit)

//Event Handlers
function handleSubmit(e){
    e.preventDefault()
    console.log(e.target)
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
document.querySelector('animal-list').appendChild(card)
}

//Fetch requests
//Get fetch for all dog resources
function getAllDogs(){
    var xAPIKey = 'fe4eff12-acfa-4723-8956-d003f09be2e1'
    var url = 'https://api.thedogapi.com/images/search'
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
// function initialize(){
//     getAllDogs()
//     animalData.forEach(dog => renderOneDog(dog))
// }
// initialize()

//Button Responses
document.querySelector('#like').addEventListener('click', () => like('I like this dog'))
document.querySelector('#adoptdog').addEventListener('click', () => adoptdog('I want to bring this dog home'))
