//Event Listeners
// document.querySelector('#animal-form').addEventListener('submit', handleSubmit)

//Event Handlers
// function handleSubmit(e){
//     e.preventDefault()
//     console.log(e.target)
//     let dogObject = {
//         name:e.target.name.value,
//         imageURL:e.target.image_url.value,
//         breedGroup:e.target.breed_group.value,
//         bredFor:e.target.bred_for.value,
//         temperament:e.target.temperament.value,
//     }
//     renderOneDog(dogObject)
// }

//DOM Render Functions
function renderOneDog(dog){
    // Build Animal
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
         <image src="${imageURL}">
        <div class= "buttons">
            <button> Like </button>
            <button> Dislike </button>
        </div>
    `
    //Add animal card to DOM
    document.querySelector('animal-list').appendChild(card)
}

//Fetch requests
//Get fetch for all dog resources

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "fe4eff12-acfa-4723-8956-d003f09be2e1")

// var formData = new FormData();

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: formdata,
    redirect: 'follow'
};

fetch("https://api.thedogapi.com/v1/images/search", requestOptions)
    .then(response => response.text())
    .then(res => res.json)
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

// function getAllDogs(){
//     var xAPIKey = 'fe4eff12-acfa-4723-8956-d003f09be2e1'
//     var url = 'https://api.thedogapi.com/v1/images/search'
//     return fetch (url,{
//         method: 'GET',
//         headers: {
//             "Authorization": xAPIKey,
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(res => res.json())
//     .then(animalData => animalData.forEach(dog => renderOneDog(dog)))
//     .catch(error => console.log)


//Initial Render
//Get data and render dogs to the DOM
// function initialize(){
//     getAllDogs()
//     animalData.forEach(dog => renderOneDog(dog))
// }
// initialize()

//Button Responses
// document.querySelector('#like').addEventListener('click', () => like('I like this dog'))
// document.querySelector('#dislike').addEventListener('click', () => dislike('I dislike this dog'))
