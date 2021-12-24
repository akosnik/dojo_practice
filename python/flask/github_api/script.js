

function gitUser() {
    fetch("https://api.github.com/users/adion81")
    .then(results => results.json() )
    .then(data => displayData(data) )
    .catch(err => console.log(err) )
}

function displayData(data) {
    console.log(data);
    let myString = data.name;
    document.getElementById("git-name").innerHTML = myString;
    let link = data.avatar_url;
    document.getElementById("git-image").src = link;
}

function gitInput(element) {
    user = element.value
    fetch("https://api.github.com/users/" + user)
    .then(results => results.json() )
    .then(data => displayData(data) )
    .catch(err => console.log(err) )

}