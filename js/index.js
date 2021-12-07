//DOM Render Functions
function renderOneDog(dog){
    // Build Animal
    console.log('dogs: ', dog)
    if (!dog && !dog.breeds) return null
    console.log('below conditional')
    document.getElementById("name").value = dog.breeds[0].name
    document.getElementById('bred_for').value = dog.breeds[0].bred_for
    document.getElementById("temperament").value = dog.breeds[0].temperament
    let card = document.createElement('div')
    let img = document.createElement('img')
    img.src = dog.url
    card.appendChild(img)
    card.className = 'card'
    
    //Add animal card to DOM
    document.querySelector('#animals').appendChild(card)
}

//Fetch requests
//Get fetch for all dog resources

function getDogs(){
    console.log("dogs function")
    var xAPIKey = 'fe4eff12-acfa-4723-8956-d003f09be2e1'
    var url = 'https://api.thedogapi.com/v1/images/search'
    return fetch (url,{
        method: 'GET',
        headers: {
            "Authorization": xAPIKey,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(images => {
        console.log('images: ', images)
        images.forEach(dog => renderOneDog(dog))
    })
    .catch(error => console.log("error: ", error))
}

//Initial Render
//Get data and render dogs to the DOM
function initialize(){
    getDogs()
    console.log('initialize')
}

//Button Responses & Event Listeners
document.querySelector('#like').addEventListener('click', () => alert('I like this dog'))
document.querySelector('#dislike').addEventListener('click', () => alert('I dislike this dog'))
initialize()

document.addEventListener("DOMContentLoaded", function(){
    console.log("The DOM has loaded")
});