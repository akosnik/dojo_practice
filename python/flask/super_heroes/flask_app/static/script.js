
function search(e) {
    e.preventDefault();
    var searchForm = document.getElementById("searchForm");
    var form = new FormData(searchForm);
    fetch("http://localhost:5000/searching", {method:'POST', body:form})
        .then(res => res.json() )
        .then(data => display(data))
}
    
function display(data) {
    console.log(data);
    results = document.getElementById("results");
    results.innerHTML = 
    `<img src="${data.results[0].image.url}" class="w-50">
    <h1>${data.results[0].name}</h1>
    <p>AKA: ${data.results[0].biography['full-name']}</p>`
    
}