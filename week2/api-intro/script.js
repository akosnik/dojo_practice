async function fetchPokemon() {
    var pokeName = document.getElementById("search").value;
    pokeName = pokeName.toLowerCase();
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName + "/");

    var data = await response.json();
    console.log(data);

    var image = data.sprites.front_default;
    document.getElementById("image1").setAttribute("src", image);
}

// function fetchPokemon() {
//     var pokeName = document.getElementById("search").value;
//     pokeName = pokeName.toLowerCase();
//     fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName)
//         .then(res => res.json())
//         .then(res => {
//             console.log(res);
//         })
//         .catch(err => console.log(err));
// }