var endpoint = "https://dog.ceo/api/breeds/image/random";

function fetchDog() {
    console.log(anotherDog);
    fetch(endpoint).then(response => {
        return response.json(); 
    }).then(jsonResponse => {
        anotherDog.src=jsonResponse.message;
    })
}

//target button 
var anotherDog = document.querySelector('.dog-image');
anotherDog.addEventListener('click', fetchDog);


fetchDog();



